import React from 'react'

const stats = [
    { label: 'Items', value: '10+' },
    { label: 'Start Price', value: '$5' },
    { label: 'Country', value: '10+' },
  ]

function ContentSection() {
  return (
    <div>
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Our Missions</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className=" leading-8 text-gray-600">
                  1.Become the best company that provides exports to all countries
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                  <p>
                    2.Building an export company to international countries and providing customer trust and satisfaction
                  </p>
                  <p className="mt-10">
                    3.Become a trusted and strong export company
                  </p>
                  <p className="mt-10 ">
                    4.Promote the development of export and internationalization projects through advice to Indonesian companies with products and services by impacting in the world market.
                  </p>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                      <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                      <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ContentSection