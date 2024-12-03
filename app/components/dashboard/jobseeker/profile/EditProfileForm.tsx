import React, { useState, useEffect } from 'react';
import { useAuth } from '~/hooks/useAuth';
import { Upload, Mail, Phone, Calendar, MapPin, FileText, User, Check } from 'lucide-react';

interface ProfileFormData {
  photo: File | null;
  photoPreview: string;
  fullName: string;
  gender: 'male' | 'female' | '';
  email: string;
  phone: string;
  address: string;
  birthDate: string;
  bio: string;
  cv: File | null;
}

export default function EditProfileForm() {
  const { userData } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<ProfileFormData>({
    photo: null,
    photoPreview: '/temp.jpg',
    fullName: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    birthDate: '',
    bio: '',
    cv: null,
  });

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!validTypes.includes(file.type)) {
        setError('Please upload a valid image file (JPEG, PNG, or GIF)');
        return;
      }

      if (file.size > 2 * 1024 * 1024) {
        setError('Image size should be less than 2MB');
        return;
      }

      setFormData(prev => ({
        ...prev,
        photo: file,
        photoPreview: URL.createObjectURL(file)
      }));
      setError('');
    }
  };

  const handleCVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        cv: file
      }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Unauthorized - Please login again');
        return;
      }

      const profileData = {
        fullName: formData.fullName,
        gender: formData.gender,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        birthDate: formData.birthDate,
        bio: formData.bio
      };

      const formDataToSend = new FormData();

      formDataToSend.append('data', JSON.stringify(profileData));
      
      if (formData.photo instanceof File) {
        formDataToSend.append('photo', formData.photo);
      }
      if (formData.cv instanceof File) {
        formDataToSend.append('cv', formData.cv);
      }

      const response = await fetch(
        'http://localhost/polinema_career/api/users/update_profile.php',
        {
          method: 'POST',
          headers: {
            Authorization: token,
          },
          body: formDataToSend,
        }
      );

      const responseText = await response.text();
      let data;
      try {
        const jsonStart = responseText.indexOf('{');
        const jsonString = responseText.substring(jsonStart);
        data = JSON.parse(jsonString);
      } catch (parseError) {
        console.error('Failed to parse response:', responseText);
        setError('Invalid response from server');
        return;
      }

      if (data.status === 'success') {
        const profileResponse = await fetch(
          'http://localhost/polinema_career/api/users/profile.php',
          {
            headers: {
              Authorization: token,
            },
          }
        );

        const profileData = await profileResponse.json();
        if (profileData.status === 'success') {
          setFormData(prev => ({
            ...prev,
            photoPreview: profileData.data.photo || '/temp.jpg'
          }));
        }

        const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
        const updatedUser = {
          ...currentUser,
          fullName: formData.fullName,
          email: formData.email
        };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        
        alert('Profile updated successfully');
      } else {
        setError(data.message || 'Failed to update profile');
      }
    } catch (err) {
      console.error('Error details:', err);
      setError('An error occurred while updating profile');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('Unauthorized - Please login again');
          return;
        }

        const response = await fetch(
          'http://localhost/polinema_career/api/users/profile.php',
          {
            headers: {
              Authorization: token,
            },
          }
        );

        const data = await response.json();
        if (data.status === 'success') {
          const profile = data.data;
          setFormData(prev => ({
            ...prev,
            photoPreview: profile.photo || '/temp.jpg',
            fullName: profile.full_name || '',
            gender: profile.gender || '',
            email: profile.email || '',
            phone: profile.phone || '',
            address: profile.address || '',
            birthDate: profile.birth_date || '',
            bio: profile.bio || '',
            photo: null,
            cv: null
          }));
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        setError('Failed to fetch profile data');
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Edit Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Photo Upload */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <img 
              src={formData.photoPreview} 
              alt="Profile" 
              className="h-24 w-24 rounded-full object-cover border-2 border-gray-200"
            />
            {formData.photo && (
              <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1">
                <Check className="w-4 h-4" />
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Photo
            </label>
            <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">
              <Upload className="w-4 h-4" />
              <span>Change Photo</span>
              <input 
                type="file"
                accept="image/jpeg,image/png"
                onChange={handlePhotoChange}
                className="hidden"
              />
            </label>
            <p className="mt-2 text-sm text-gray-500">
              Recommended: Square image, max 2MB
            </p>
          </div>
        </div>

        {/* Basic Info */}
        <div className="grid grid-cols-2 gap-6">

        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9b71]/20 focus:border-[#ff9b71]"
                placeholder="Your full name..."
              />
            </div>
          </div>

          {/* email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9b71]/20 focus:border-[#ff9b71]"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9b71]/20 focus:border-[#ff9b71]"
                placeholder="+62..."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Birth Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9b71]/20 focus:border-[#ff9b71]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9b71]/20 focus:border-[#ff9b71]"
                placeholder="Your address..."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9b71]/20 focus:border-[#ff9b71]"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bio
          </label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9b71]/20 focus:border-[#ff9b71]"
            placeholder="Tell us about yourself..."
          />
        </div>

        {/* CV Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            CV / Resume
          </label>
          <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">
            <FileText className="w-4 h-4" />
            <span>Upload CV</span>
            <input 
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleCVChange}
              className="hidden"
            />
          </label>
          {formData.cv && (
            <p className="mt-2 text-sm text-gray-600">
              Selected file: {formData.cv.name}
            </p>
          )}
        </div>

        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}

        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-[#ff9b71] text-white rounded-lg hover:bg-[#ff8c5c] disabled:opacity-50"
          >
            {isLoading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}
