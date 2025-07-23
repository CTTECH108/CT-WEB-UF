import React, { memo } from 'react'

interface ShippingPolicyProps {
  className?: string
}

/**
 * ShippingDelivery component displays the company's shipping and delivery policies
 * @component
 * @param {string} className - Optional CSS classes for root element
 */
const ShippingDelivery: React.FC<ShippingPolicyProps> = ({ className }) => {
  try {
    const policySections = [
      {
        title: 'Domestic Shipping',
        content: 'Standard delivery within 3-5 business days...'
      },
      {
        title: 'International Shipping',
        content: 'Customs-friendly shipping with duties calculated at checkout...'
      }
    ]

    return (
      <main className={`container py-8 ${className || ''}`}>
        <h1 className="text-3xl font-bold mb-6" aria-label="Shipping and Delivery Policy">
          Shipping & Delivery Policy
        </h1>
        
        {policySections.map((section, index) => (
          <section key={section.title} className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              {index + 1}. {section.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {section.content}
            </p>
          </section>
        ))}

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ShippingDeliveryPolicy",
            "description": "CTSolutions Shipping and Delivery Policy"
          })}
        </script>
      </main>
    )
  } catch (error) {
    console.error('ShippingDelivery Error:', error)
    return (
      <div className="bg-red-50 p-4 rounded-lg">
        <p className="text-red-600">Error loading shipping information. Please try again later.</p>
      </div>
    )
  }
}

export default memo(ShippingDelivery)