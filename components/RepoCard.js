import Image from 'next/image'

const getTimeInterval = (date) => {
  const today = new Date()
  const dateSubmitted = new Date(date)
  var total_seconds = Math.abs(dateSubmitted - today) / 1000;
  var timeInterval = Math.floor(total_seconds / (60 * 60 * 24))
  return timeInterval
}

export default function RepoCard(repo) {
  return (
    <tr key={repo.name}>
      <td className="px-0 md:px-6 py-4">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex-shrink-0 h-28 w-28 my-4 mx-5">
            <Image className="h-28 w-28 object-contail rounded-full shadow" width={100} height={100} objectFit="contain" src={repo.image} alt="" />
          </div>
          <div>
            <div className="text-base uppercase font-medium text-gray-900">{repo.name}</div>
            <div className="text-sm text-gray-900 max-w-prose sm:w-full line-clamp-6">{repo.desc}</div>
            <div className="text-sm text-gray-500 px-6 sm:px-0 py-4 flex flex-col sm:flex-row items-center sm:justify-start">
              <div className="flex justify-start items-center">
                <span className="px-4 py-1.5 inline-flex flex-nowrap text-xs leading-5 font-semibold rounded-full border hover:shadow-sm shadow-lg">
                  Stars: {repo.stars}
                </span>
                <span className="px-4 py-1.5 inline-flex flex-nowrap text-xs leading-5 font-semibold rounded-full border hover:shadow-sm shadow-lg ml-3">
                  Issues: {repo.issues}
                </span>
              </div>
              <div className="px-6 mt-4 sm:m-0 text-xs text-gray-500">Submitted {getTimeInterval(repo.date) > 0 ? `${getTimeInterval(repo.date)} days ago` : 'today'} by {repo.owner}.</div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  )
}
