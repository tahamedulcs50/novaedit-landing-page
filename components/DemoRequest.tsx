"use client";
import Link from 'next/link';

interface DemoRequestProps {
  className?: string;
}

export default function DemoRequest({ className }: DemoRequestProps) {
  
  // ইভেন্ট হ্যান্ডলারটি কম্পোনেন্টের ভেতরেই রাখা হয়েছে
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We\'ll be in touch soon.');
  };

  return (
    <div className={`max-w-md w-full space-y-6 ${className}`}>
      <h2 className="text-2xl font-bold text-foreground">
        Request Early Access
      </h2>
      <p className="text-muted-foreground">
        Be among the first to experience NovaEdit. Sign up for priority access.
      </p>
      <form
        className="space-y-4"
        onSubmit={handleSubmit} 
      >
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="you@example.com"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50"
        >
          Request Access
        </button>
      </form>
      <p className="text-xs text-muted-foreground">
        We'll never share your email with anyone else.
      </p>
    </div>
  );
}
