
"use client";

import { useState } from "react";
import { FormData, formSchema } from "@/lib/leads";
import { US_STATES } from "@/lib/constants";
import { z } from "zod";

export function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = formSchema.parse(formData);

      // Send to API
      const response = await fetch("/api/post_lead_etech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      });
      console.log("THIS IS THE RESPONSE:", response)
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Reset form on success
      setFormData({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        email: "",
      });
      alert("Form submitted successfully!");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<FormData> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            fieldErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        alert("An error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="rounded-md shadow-sm -space-y-px">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="firstName" className="sr-only">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="First Name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className="sr-only">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Last Name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="sr-only">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Phone Number"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="address" className="sr-only">
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Address"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.address}</p>
            )}
          </div>

          <div>
            <label htmlFor="city" className="sr-only">
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="City"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.city}</p>
            )}
          </div>

          {/* Repeat similar structure for other fields */}
          
          <div>
            <label htmlFor="state" className="sr-only">
              State
            </label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            >
              <option value="">Select State</option>
              {US_STATES.map((state) => (
                <option key={state.code} value={state.code}>
                  {state.code} - {state.name}
                </option>
              ))}
            </select>
            {errors.state && (
              <p className="text-red-500 text-xs mt-1">{errors.state}</p>
            )}
          </div>

          <div>
            <label htmlFor="zip" className="sr-only">
              ZIP
            </label>
            <input
              id="zip"
              name="zip"
              type="text"
              value={formData.zip}
              onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="ZIP"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.zip}</p>
            )}
          </div>


        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}






// 'use client';

// import { useState } from 'react';
// import { FormData, formSchema } from '@/lib/leads';
// import { z } from 'zod';
// import { US_STATES } from '@/lib/constants';

// const initialFormData: FormData = {
//   firstName: '',
//   lastName: '',
//   address: '',
//   city: '',
//   state: '',
//   zip: '',
//   phone: '',
//   email: '',

// };

// export default function LeadForm() {
//   const [formData, setFormData] = useState<FormData>(initialFormData);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError(null);

//     try {
//       const response = await fetch('/api/submit-lead', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to submit form');
//       }

//       setSuccess(true);
//       setFormData(initialFormData);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'Something went wrong');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
//       {error && (
//         <div className="bg-red-100 text-red-700 p-3 rounded">
//           {error}
//         </div>
//       )}
      
//       {success && (
//         <div className="bg-green-100 text-green-700 p-3 rounded">
//           Thank you for submitting your information. We will be in touch soon!
//         </div>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
//             First Name
//           </label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
//             Last Name
//           </label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//           />
//         </div>
//       </div>

//       <div>
//         <label htmlFor="address" className="block text-sm font-medium text-gray-700">
//           Address
//         </label>
//         <input
//           type="text"
//           id="address"
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           required
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div>
//           <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//             City
//           </label>
//           <input
//             type="text"
//             id="city"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//             <label htmlFor="state" className="sr-only">
//               State
//             </label>
//             <select
//               id="state"
//               name="state"
//               value={formData.state}
//               onChange={handleChange}
//               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//             >
//               <option value="">Select State</option>
//               {US_STATES.map((state) => (
//                 <option key={state.code} value={state.code}>
//                   {state.code} - {state.name}
//                 </option>
//               ))}
//             </select>
//             {errors.state && (
//               <p className="text-red-500 text-xs mt-1">{errors.state}</p>
//             )}
//           </div>

//         <div>
//           <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
//             ZIP Code
//           </label>
//           <input
//             type="text"
//             id="zip"
//             name="zip"
//             value={formData.zip}
//             onChange={handleChange}
//             required
//             pattern="[0-9]{5}"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//           />
//         </div>
//       </div>

//       <div>
//         <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
//           Phone Number
//         </label>
//         <input
//           type="tel"
//           id="phoneNumber"
//           name="phoneNumber"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//           placeholder="123-456-7890"
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         />
//       </div>

//       <div>
//         <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">
//           Email Address
//         </label>
//         <input
//           type="email"
//           id="emailAddress"
//           name="emailAddress"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         />
//       </div>

      

//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
//       >
//         {isSubmitting ? 'Submitting...' : 'Get Help Now'}
//       </button>
//     </form>
//   );
// }