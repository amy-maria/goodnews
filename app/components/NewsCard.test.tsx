import { describe, it, expect, vi} from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import NewsCard from './NewsCard';

describe('NewsCard', () => {
    it('renders the article title', () => {
        render(
            <NewsCard
                title="Test Headline"
                description="Test description"
                urlToImage='https://example.com/image.jpg'
                onClick={() => { }}
            />
        );
        expect(screen.getByText('Test Headline')).toBeInTheDocument();
    });
    it('calls onClick when the card is clicked', () => {
        const handleClick = vi.fn();
        render(
            <NewsCard
                title="News Headline"
                description='story description'
                urlToImage=' https://example.com/image.jpg'
                onClick={handleClick}
            />
        );
        fireEvent.click(screen.getByText('News Headline'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    it('shows fallback message when picture fails to load', () => {
        render(
            <NewsCard
                title="test headline"
                description='news description'
                urlToImage='https://example.com/broken.jpg'
                onClick={() => { }}
            />
        );
        const image = screen.getByAltText("test headline");
        fireEvent.error(image);
        expect(screen.getByText(/No image available/i)).toBeInTheDocument();
    });

    it('shows the fallback image when there is not image url', () => {
        render(
            <NewsCard
                title="Test Headline"
                description='test description'
                urlToImage=''
                onClick={() => { }}
            />
        );
        expect(screen.getByText(/No image available/i)).toBeInTheDocument();
    });
});