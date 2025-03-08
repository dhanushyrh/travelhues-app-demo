const stats = [
    { id: 1, name: 'Discovering Wanderers', value: '44 ' },
    { id: 2, name: 'Listed Activites', value: '119 ' },
    { id: 3, name: 'Active Users', value: '460' },
  ]
  
  export default function Stats() {
    return (
      <div className="bg-white  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-left lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 font-sora text-gray-600">{stat.name}</dt>
                <dd className="order-first font-poppins text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  