const repositories = {
  hasSubFields: false,
  resolve: async (repositories) => {
    if (!Array.isArray(repositories)) return null

    const records = await Promise.all(
      repositories.filter(Boolean).map(async (repo) => {
        try {
          const res = await fetch('https://api.github.com/repos/' + repo, {
            headers: process.env.GITHUB_TOKEN
              ? { authorization: 'token ' + process.env.GITHUB_TOKEN }
              : undefined,
          })

          if (!res.ok) {
            console.error(
              `[GitHub API Error] Gagal memuat ${repo}: ${res.status} ${res.statusText}`
            )
            return null
          }

          const json = await res.json()

          return {
            name: json.name || repo.split('/')[1] || repo,
            owner: json.owner?.login || repo.split('/')[0] || '',
            url: json.html_url || `https://github.com/${repo}`,
            description: json.description || '',
            language: json.language || '',
            stars: json.stargazers_count || 0,
            forks: json.forks_count || 0,
          }
        } catch (error) {
          console.error(`[Fetch Error] Gagal mengambil data untuk ${repo}:`, error)
          return null
        }
      })
    )

    return { records: records.filter(Boolean) }
  },
}

export default repositories
