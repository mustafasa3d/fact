"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

interface ContactFormData {
  name: string;
  fullName: string;
  phone: string;
  email: string;
  emailConfirm: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>();

  const email = watch("email");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Here you can add your API call to submit the form
      console.log("Form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 text-lg font-medium mb-2 text-right"
          >
            الاسم
          </label>
          <input
            id="name"
            type="text"
            {...register("name", {
              required: "الاسم مطلوب",
              minLength: { value: 2, message: "الاسم يجب أن يكون حرفين على الأقل" },
            })}
            className="w-full bg-white px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#306E57] text-right"
            placeholder="اسمك الكامل"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1 text-right">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label
            htmlFor="phone"
            className="block text-gray-700 text-lg font-medium mb-2 text-right"
          >
            الجوال: (مثل 0XXXXXX)
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone", {
              required: "رقم الجوال مطلوب",
              pattern: {
                value: /^[0-9]{8,15}$/,
                message: "رقم الجوال غير صحيح",
              },
            })}
            className="w-full bg-white px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#306E57] text-right"
            placeholder="00000000"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1 text-right">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 text-lg font-medium mb-2 text-right"
          >
            البريد الإلكتروني
          </label>
          <input
            id="email"
            type="email bg-white"
            {...register("email", {
              required: "البريد الإلكتروني مطلوب",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "البريد الإلكتروني غير صحيح",
              },
            })}
            className="w-full bg-white px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#306E57]"
            placeholder="بريدك"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1 text-right">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 text-lg font-medium mb-2 text-right"
          >
            استفساراتك
          </label>
          <textarea
            id="message"
            rows={6}
            {...register("message", {
              required: "الرسالة مطلوبة",
              minLength: {
                value: 10,
                message: "الرسالة يجب أن تكون 10 أحرف على الأقل",
              },
            })}
            className="w-full bg-white px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#306E57] text-right resize-none"
            placeholder="اكتب هنا ..."
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1 text-right">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#306E57] text-white text-xl font-medium py-4 rounded-md hover:bg-[#275847] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "جاري الإرسال..." : "إرسال"}
        </button>

        {submitSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-center">
            تم إرسال الرسالة بنجاح!
          </div>
        )}
      </form>
    </div>
  );
}
