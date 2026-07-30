export async function getExcludedWords(): Promise<string[]> {
    const response = await fetch('/api/excluded-words');

    if (!response.ok) {
        console.error('Failed to fetch excluded words.');
        return [];
    }
    return response.json();
}

export async function addExcludedWords(phrase: string): Promise<string[]> {
    const response = await fetch('/api/excluded-words', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phrase }),
        
    });

    if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to add word');
    }
    return response.json();
}

export async function removeExcludedWords(phrase: string): Promise<string[]> {
    const response = await fetch('/api/excluded-words', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phrase }),
    });
    if (!response.ok) {
        console.error('Failed to remove excluded word');
        return [];
    }
    return response.json();
}