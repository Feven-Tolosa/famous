'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import {
  FiEye,
  FiEyeOff,
  FiMail,
  FiLock,
  FiUser,
  FiPhone,
  FiMapPin,
  FiArrowLeft,
  FiCamera,
} from 'react-icons/fi'

export default function SettingsPage() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  })
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const togglePasswordVisibility = (field: 'current' | 'new' | 'confirm') => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = {
      name: '',
      phone: '',
      email: '',
      location: '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
      isValid = false
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
      isValid = false
    } else if (!/^[\d\s+\-().]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
      isValid = false
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required'
      isValid = false
    }

    if (
      formData.currentPassword ||
      formData.newPassword ||
      formData.confirmPassword
    ) {
      if (!formData.currentPassword) {
        newErrors.currentPassword =
          'Current password is required to make changes'
        isValid = false
      }

      if (formData.newPassword && formData.newPassword.length < 8) {
        newErrors.newPassword = 'Password must be at least 8 characters'
        isValid = false
      }

      if (formData.newPassword !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match'
        isValid = false
      }
    }

    setErrors(newErrors)
    return isValid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSuccessMessage('')

    try {
      const response = await fetch('/api/user/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          profileImage,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          location: formData.location,
          ...(formData.currentPassword && {
            currentPassword: formData.currentPassword,
          }),
          ...(formData.newPassword && { newPassword: formData.newPassword }),
        }),
      })

      const data = await response.json()
      if (!response.ok)
        throw new Error(data.message || 'Failed to update settings')

      setSuccessMessage('Profile updated successfully!')
      setFormData((prev) => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      }))
    } catch (error) {
      console.error('Update error:', error)
      setErrors((prev) => ({
        ...prev,
        serverError:
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred',
      }))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='min-h-screen bg-slate-800 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-3xl mx-auto bg-bgSecondary rounded-xl shadow-md overflow-hidden p-6'>
        <div className='flex items-center mb-6'>
          <button
            onClick={() => router.back()}
            className='mr-4 p-2 rounded-full hover:bg-slate-600'
          >
            <FiArrowLeft className='text-blue-100 text-xl' />
          </button>
          <h1 className='text-2xl font-bold pb-5 text-blue-100'>
            Account Settings
          </h1>
        </div>

        {successMessage && (
          <div className='mb-6 p-4 bg-green-900 text-green-100 rounded'>
            {successMessage}
          </div>
        )}

        {/* Profile Image Upload */}
        <div className='flex flex-col items-center mb-8'>
          <div className='relative group'>
            <div className='w-32 h-32 rounded-full bg-slate-600 overflow-hidden border-2 border-blue-100'>
              {profileImage ? (
                <img
                  src={profileImage}
                  alt='Profile'
                  className='w-full h-full object-cover'
                />
              ) : (
                <div className='w-full h-full flex items-center justify-center text-blue-100'>
                  <FiUser className='text-4xl' />
                </div>
              )}
            </div>
            <button
              type='button'
              onClick={triggerFileInput}
              className='absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full hover:bg-slate-500 transition-all group-hover:opacity-100 opacity-90'
            >
              <FiCamera className='text-lg' />
            </button>
            <input
              type='file'
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept='image/*'
              className='hidden'
            />
          </div>
          <p className='mt-2 text-blue-100 text-sm'>
            Click to change profile photo
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Personal Information Section */}
          <div className='border-b border-slate-600 pb-6'>
            <h2 className='text-lg font-medium text-blue-100 mb-4'>
              Personal Information
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-blue-100 mb-1'
                >
                  Full Name
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <FiUser className='text-slate-400' />
                  </div>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    placeholder='Enter your full name'
                    value={formData.name}
                    onChange={handleChange}
                    className={`block w-full pl-10 py-2 bg-slate-600 text-white ${
                      errors.name ? 'border-red-500' : 'border-slate-500'
                    } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                {errors.name && (
                  <p className='mt-1 text-sm text-red-400'>{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-blue-100 mb-1'
                >
                  Phone Number
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <FiPhone className='text-slate-400' />
                  </div>
                  <input
                    id='phone'
                    name='phone'
                    type='tel'
                    placeholder='Enter your phone number'
                    value={formData.phone}
                    onChange={handleChange}
                    className={`block w-full pl-10 py-2 bg-slate-600 text-white ${
                      errors.phone ? 'border-red-500' : 'border-slate-500'
                    } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                {errors.phone && (
                  <p className='mt-1 text-sm text-red-400'>{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-blue-100 mb-1'
                >
                  Email Address
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <FiMail className='text-slate-400' />
                  </div>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Enter your email address'
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-full pl-10 py-2 bg-slate-600 text-white ${
                      errors.email ? 'border-red-500' : 'border-slate-500'
                    } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                {errors.email && (
                  <p className='mt-1 text-sm text-red-400'>{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor='location'
                  className='block text-sm font-medium text-blue-100 mb-1'
                >
                  Location
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <FiMapPin className='text-slate-400' />
                  </div>
                  <input
                    id='location'
                    name='location'
                    type='text'
                    placeholder='Enter your location'
                    value={formData.location}
                    onChange={handleChange}
                    className={`block w-full pl-10 py-2 bg-slate-600 text-white ${
                      errors.location ? 'border-red-500' : 'border-slate-500'
                    } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                {errors.location && (
                  <p className='mt-1 text-sm text-red-400'>{errors.location}</p>
                )}
              </div>
            </div>
          </div>

          {/* Password Change Section */}
          <div className='border-b border-slate-600 pb-6'>
            <h2 className='text-lg font-medium text-blue-100 mb-4'>
              Change Password
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='md:col-span-2'>
                <label
                  htmlFor='currentPassword'
                  className='block text-sm font-medium text-blue-100 mb-1'
                >
                  Current Password
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <FiLock className='text-slate-400' />
                  </div>
                  <input
                    id='currentPassword'
                    name='currentPassword'
                    type={showPassword.current ? 'text' : 'password'}
                    placeholder='Enter your current password'
                    autoComplete='current-password'
                    value={formData.currentPassword}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-10 py-2 bg-slate-600 text-white ${
                      errors.currentPassword
                        ? 'border-red-500'
                        : 'border-slate-500'
                    } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                  <button
                    type='button'
                    onClick={() => togglePasswordVisibility('current')}
                    className='absolute inset-y-0 right-0 pr-3 flex items-center'
                  >
                    {showPassword.current ? (
                      <FiEyeOff className='text-slate-400 hover:text-blue-100' />
                    ) : (
                      <FiEye className='text-slate-400 hover:text-blue-100' />
                    )}
                  </button>
                </div>
                {errors.currentPassword && (
                  <p className='mt-1 text-sm text-red-400'>
                    {errors.currentPassword}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='newPassword'
                  className='block text-sm font-medium text-blue-100 mb-1'
                >
                  New Password
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <FiLock className='text-slate-400' />
                  </div>
                  <input
                    id='newPassword'
                    name='newPassword'
                    type={showPassword.new ? 'text' : 'password'}
                    placeholder='Enter your new password'
                    autoComplete='new-password'
                    value={formData.newPassword}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-10 py-2 bg-slate-600 text-white ${
                      errors.newPassword ? 'border-red-500' : 'border-slate-500'
                    } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                  <button
                    type='button'
                    onClick={() => togglePasswordVisibility('new')}
                    className='absolute inset-y-0 right-0 pr-3 flex items-center'
                  >
                    {showPassword.new ? (
                      <FiEyeOff className='text-slate-400 hover:text-blue-100' />
                    ) : (
                      <FiEye className='text-slate-400 hover:text-blue-100' />
                    )}
                  </button>
                </div>
                {errors.newPassword && (
                  <p className='mt-1 text-sm text-red-400'>
                    {errors.newPassword}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='confirmPassword'
                  className='block text-sm font-medium text-blue-100 mb-1'
                >
                  Confirm New Password
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <FiLock className='text-slate-400' />
                  </div>
                  <input
                    id='confirmPassword'
                    name='confirmPassword'
                    type={showPassword.confirm ? 'text' : 'password'}
                    placeholder='Confirm your new password'
                    autoComplete='new-password'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-10 py-2 bg-slate-600 text-white ${
                      errors.confirmPassword
                        ? 'border-red-500'
                        : 'border-slate-500'
                    } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                  <button
                    type='button'
                    onClick={() => togglePasswordVisibility('confirm')}
                    className='absolute inset-y-0 right-0 pr-3 flex items-center'
                  >
                    {showPassword.confirm ? (
                      <FiEyeOff className='text-slate-400 hover:text-blue-100' />
                    ) : (
                      <FiEye className='text-slate-400 hover:text-blue-100' />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className='mt-1 text-sm text-red-400'>
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className='flex justify-end space-x-3'>
            <button
              type='button'
              onClick={() => router.back()}
              className='px-4 py-2 border border-slate-500 rounded-md shadow-sm text-sm font-medium text-blue-100 bg-slate-700 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            >
              Cancel
            </button>
            <button
              type='submit'
              disabled={isSubmitting}
              className='px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
