/**
 * Share recipe using native navigator.share with fallback to clipboard copy
 */
export async function shareRecipe(
  title: string,
  text: string,
  url: string
): Promise<{ success: boolean; method: 'native' | 'clipboard' | 'failed' }> {
  if (navigator.share) {
    try {
      await navigator.share({
        title,
        text,
        url,
      });
      return { success: true, method: 'native' };
    } catch (err: any) {
      if (err.name === 'AbortError') {
        return { success: false, method: 'native' };
      }
      // Fallback to clipboard if share failed
    }
  }

  // Fallback to clipboard
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(`${title} - ${url}`);
      return { success: true, method: 'clipboard' };
    }
  } catch (clipboardErr) {
    console.error('Clipboard copy failed:', clipboardErr);
  }

  return { success: false, method: 'failed' };
}
