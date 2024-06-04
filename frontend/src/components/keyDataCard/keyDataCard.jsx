import '@/components/keyDataCard/keyDataCard.style.scss'

export const KeyDataCard = ({ icon, bgIcon, displayName, value, unit }) => {
    return(
        <div className="score-card">
            <div className="score-card__icon" style={{ backgroundColor : bgIcon }}>
                <img src={icon} alt={`icon ${displayName}`} />
            </div>
            <div>
                <h3>{value}{unit}</h3>
                <p>{displayName}</p>
            </div>
        </div>
    )
}