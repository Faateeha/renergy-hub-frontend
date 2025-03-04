import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Registration: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    brandName: "",
    brandType: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    taxId: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [id]: "" })); // Clear errors on input
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/authentication/confirmation"); // Replace with your confirmation page route
    }
  };

  return (
    <div className=" flex flex-col justify-between">
      {/* Back Button and Logo */}
      <div className="flex justify-between px-4 py-2">
        <ArrowLeft
          size={24}
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        />
        <div className="bg-green-800 w-[5rem] h-[6rem] border"></div>
      </div>
      <div className="flex flex-col items-center p-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Business Information
          </h1>
          <p className="text-gray-400 text-sm">
            Please enter information about your company.
          </p>
        </div>
        <form className="w-full max-w-4xl p-6" onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold text-green-800 mb-3">
            General Information
          </h2>

          {/* Form Fields */}
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <label
                htmlFor="brandName"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Brand Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="brandName"
                value={formData.brandName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your brand name"
              />
              {errors.brandName && (
                <p className="text-red-500 text-sm">{errors.brandName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="brandType"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Brand Type <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="brandType"
                value={formData.brandType}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your brand type"
              />
              {errors.brandType && (
                <p className="text-red-500 text-sm">{errors.brandType}</p>
              )}
            </div>
          </div>

          {/* More Fields */}
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <label
                htmlFor="streetAddress"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Street Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your street address"
              />
              {errors.streetAddress && (
                <p className="text-red-500 text-sm">{errors.streetAddress}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your city"
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Zip Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your zip code"
              />
              {errors.zipCode && (
                <p className="text-red-500 text-sm">{errors.zipCode}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="taxId"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Tax ID Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="taxId"
                value={formData.taxId}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your tax ID number"
              />
              {errors.taxId && (
                <p className="text-red-500 text-sm">{errors.taxId}</p>
              )}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-12 py-2 bg-green-800 text-white rounded-md hover:bg-green-900"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;



