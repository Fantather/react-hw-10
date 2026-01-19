import './CurrentLocation.css'

export default function CurrentLocation({headderText, coordinates})
{
    const {latitude, longitude} = coordinates;
    return(
        <section className='current-location'>
            <header>
                {headderText}
            </header>
            <div>
                <span>
                    <span>Широта</span>
                    <span>{latitude}</span>
                </span>
                <span>
                    <span>Длинна</span>
                    <span>{longitude}</span>
                </span>
            </div>
        </section>
    )
}