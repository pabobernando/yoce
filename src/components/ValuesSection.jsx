import React from 'react'


const values = [
    {
      name: 'Quality',
      description:
        'Companies can use high-quality materials, implement strict quality control, or offer warranties for their products or services.',
    },
    {
      name: 'Realibility',
      description:
        'Companies can use reliable transportation, have an experienced shipping team, or offer order tracking services.',
    },
    {
      name: 'Customer Service',
      description:
        'Companies can offer 24/7 customer support, have an experienced customer service team, or offer flexible payment options.',
    },
    {
      name: 'Competitive Pricing',
      description:
        'Companies can offer discounts for bulk purchases, offer loyalty programs, or work with suppliers to get the best prices.',
    },
    {
      name: 'Additional Benefits',
      description:
        'Companies can offer warranties, free shipping, or additional customer support services.',
    },
    {
      name: 'Affordable Pricing',
      description:
        'Companies can offer discounts for bulk purchases, offer loyalty programs, or work with suppliers to get the best prices.',
    },
  ]

function ValuesSection() {
  return (
    <div>
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Values Company</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            We have become a good quality coconut fiber products. Our commitment to quality products, exceptional services and incomparable customer care keep our customer coming back again. Now, we have exported these products to served customers in worldwide We never stop improving, and are continuing to expand our offerings based on how we can best serve the worldwide area
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
    </div>
  )
}

export default ValuesSection