/**
 * doi2url
 * returns information about a DOI
 * ex: doi2url('https://doi.org/10.1038/s41591-024-03173-6')
 * @param url string
 * @returns string
 */
export async function doi2url(url: string): Promise<string | null> {
  const [_, doi] = url.split('doi.org/')

  try {
    const response = await fetch(`https://doi.org/api/handles/${doi}`)
    const data = await response.json()

    if (data.values) {
      const info = data.values.find(
        ({ type }: { type: string }) => type === 'URL',
      )
      const url = info?.data?.value || null
      return url
    }

    return null
  } catch (e) {
    return null
  }
}
