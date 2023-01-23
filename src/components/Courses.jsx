const posts = [
  {
    title: 'Material Sourcing',
    href: '#',
    category: { name: 'Sustainability', href: '#' },
    description:
      'The old adage “waste not, want not” is more relevant now than ever. Use Wisely means that at each step of the production life cycle, we must...',
    date: '6 Hours',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '60',
    author: {
      name: 'VIEW COURSE',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Material Health',
    href: '#',
    category: { name: 'Sustainability', href: '#' },
    description:
      'Providing consumers with products and services that are safe for people and the environment is only possible if they are made out of safe....',
    date: '4 Hours',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '40',
    author: {
      name: 'VIEW COURSE',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Material Value',
    href: '#',
    category: { name: 'Sustainability', href: '#' },
    description:
      'Recovering more value out of the materials economy is synergistically related to the principle of using materials wisely, because outputs from....',
    date: '4 Hours',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11',
    author: {
      name: 'VIEW COURSE',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export default function Courses() {
  return (
    <div className='relative px-6 pt-16 pb-20 lg:px-8 lg:pt-0 lg:pb-12'>
      <div className='absolute inset-0'>
        <div className='h-1/3 sm:h-2/3' />
      </div>
      <div className='relative mx-auto max-w-7xl'>
        <div className='mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3'>
          {posts.map((post) => (
            <div
              key={post.title}
              className='flex flex-col overflow-hidden rounded-lg shadow-lg'
            >
              <div className='flex-shrink-0'>
                <img
                  className='h-48 w-full object-cover'
                  src={post.imageUrl}
                  alt=''
                />
              </div>
              <div className='flex flex-1 flex-col justify-between bg-white p-6'>
                <div className='flex-1'>
                  <p className='text-sm font-medium text-gb-darkergreen'>
                    <a href={post.category.href} className='hover:underline'>
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className='mt-2 block'>
                    <p className='text-xl font-semibold text-gray-900'>
                      {post.title}
                    </p>
                    <p className='mt-3 text-base text-gray-500'>
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className='mt-6 flex items-center'>
                  <div className='ml-3'>
                    <p className='text-sm font-medium text-gray-900'>
                      <a href={post.author.href} className='hover:underline'>
                        {post.author.name}
                      </a>
                    </p>
                    <div className='flex space-x-1 text-sm text-gray-500'>
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden='true'>&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
