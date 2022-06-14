import { GifItem } from './GifItem';
import { useFetchGifst } from '../hooks/useFetchGifst';

export const GifGrid = ({ category }) => {
    
    const { images, isLoading } = useFetchGifst(category);

    return (
        <>
            <h3>{ category }</h3>
            <div className='card-grid'>
                {
                    isLoading
                        ? <p>Loading...</p>
                        :images.map(image => (
                            <GifItem 
                                key={image.id} 
                                {...image} 
                            />
                        ))
                }
            </div>
        </>
    )
}
