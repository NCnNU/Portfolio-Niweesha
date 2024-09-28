"use client";
import React, { useState } from "react";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { cn } from "@/lib/utils";

interface SignupFormProps {
  id: string;
}

const SignupFormDemo: React.FC<
SignupFormProps
> = ({ id }) => { 
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      // Send a POST request to the API route
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({ firstname: "", lastname: "", email: "", message: "" }); // Clear form data on success
      } else {
        const errorData = await response.json();
        setResponseMessage(
          errorData.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("An error occurred while sending the message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div id={id} className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
      {/* Reduced the background size of the signup form container */}
      <div className="max-w-lg w-full p-2 md:p-4 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg">
        {/* Title in the middle of the page */}
        <h1 className="font-bold text-3xl text-center mb-8 text-neutral-800 dark:text-neutral-200">
          Say Hello!
        </h1>

        {/* Signup form */}
        <div className="rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  placeholder="First name"
                  type="text"
                  value={formData.firstname}
                  onChange={handleChange}
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastname"
                  placeholder="Last name"
                  type="text"
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="Email Address"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="message">Message</Label>
              <Input
                id="message"
                placeholder="Enter your message"
                type="text"
                value={formData.message}
                onChange={handleChange}
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send &rarr;"}
              <BottomGradient />
            </button>

            {/* Response message */}
            {responseMessage && (
              <p className="mt-4 text-center text-red-500">{responseMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default SignupFormDemo;