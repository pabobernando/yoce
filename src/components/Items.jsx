import React from 'react'
import Coco1 from '../image/coco1.png'
import Coco2 from '../image/coco2.png'
import Coco3 from '../image/coco3.png'
import Coco4 from '../image/coco4.png'
import Coco5 from '../image/coco5.png'
import Coco6 from '../image/images1.png'
import Briquette from '../image/briket.png'

const blogPosts = [
    {
      id: 1,
      title: 'Cocofiber',
      href: '#',
      description:
        'Cocofiber is a fiber from coconut husks that can be used for a variety of purposes, such as potting medium, craft material, filter material, and fertilizer',
      imageUrl:
        Coco1,
      date: 'Okt 16, 2023',
      datetime: '2020-03-16',
      author: {
        name: 'Naruto',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
        id: 2,
        title: 'Cocopeat',
        href: '#',
        description:
          'Cocopeat, also known as coco coir, is a sustainable and biodegradable growing medium made from the fibers of the coconut husk. It is a popular choice for gardeners because it is well-draining, water-retentive, and resistant to pests and diseases.',
        imageUrl:
          Coco2,
        date: 'Okt 16, 2023',
        datetime: '2020-03-16',
        author: {
          name: 'Naruto',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 3,
        title: 'Cocomesh',
        href: '#',
        description:
          'Cocomesh is a versatile and easy-to-use material. It is available in rolls of various sizes and thicknesses. To install cocomesh, simply lay it over the area to be protected and secure it with stakes or staples.',
        imageUrl:
          Coco3,
        date: 'Okt 16, 2023',
        datetime: '2020-03-16',
        author: {
          name: 'Naruto',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 4,
        title: 'Cocopot',
        href: '#',
        description:
          'cocopot is a type of plant pot made from coconut coir, a material made from the fibers of the coconut husk. Coco coir is a sustainable and biodegradable material that is well-suited for use in plant pots.',
        imageUrl:
          Coco4,
        date: 'Okt 16, 2023',
        datetime: '2020-03-16',
        author: {
          name: 'Naruto',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 5,
        title: 'Broom Stick',
        href: '#',
        description:
          'broomstick is a long-handled cleaning tool used to sweep floors and other surfaces. It typically has a bundle of bristles or straw at the end, which is used to sweep away dirt, dust, and other debris.',
        imageUrl:
          Coco5,
        date: 'Okt 16, 2023',
        datetime: '2020-03-16',
        author: {
          name: 'Naruto',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 6,
        title: 'Cocorope',
        href: '#',
        description:
          'Cocorope is a type of rope made from coconut fiber. It is a strong and durable rope that is resistant to saltwater and rot. Cocorope is also biodegradable, making it a sustainable choice.',
        imageUrl:
          Coco6,
        date: 'Okt 16, 2023',
        datetime: '2020-03-16',
        author: {
          name: 'Naruto',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 7,
        title: 'Briquette',
        href: '#',
        description:
          'briquette is a compressed block of coal dust or other combustible biomass material (e.g. charcoal, sawdust, wood chips, peat, or paper) used for fuel and kindling to start a fire. The term derives from the French word brique, meaning brick',
        imageUrl:
          Briquette,
        date: 'Okt 16, 2023',
        datetime: '2020-03-16',
        author: {
          name: 'Naruto',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    // More posts...
  ]

function Items() {
  return (
    <div>
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Products</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Explore our wide range of high-quality products designed to meet your needs and exceed your expectations.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <div className="mr-8 text-white text-xl">
                    {post.title}
                    </div>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-300">
                    <span className="absolute inset-0" />
                    {post.description}
                </h3>
              </article>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Items