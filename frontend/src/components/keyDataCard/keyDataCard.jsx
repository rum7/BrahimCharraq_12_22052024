import '@/components/keyDataCard/keyDataCard.style.scss'


/**
 * Render the card component
 * @function KeyDataCard
 * @param {{ 
 *  icon: string,
 *  bgIcon: string,
 *  displayName: string,
 *  value: string,
 *  unit: string
 * }}
 * @returns {JSX.Element}
 */
export const KeyDataCard = ({ icon, bgIcon, displayName, value, unit }) => {
    return(
        <div className="score-card">
            <div className="score-card__icon" style={{ backgroundColor : bgIcon }}>
                <img src={icon} alt={`icon ${displayName}`} />
            </div>
            <div className="score-card__data">
                <h3>{value}{unit}</h3>
                <p>{displayName}</p>
            </div>
        </div>
    )
}