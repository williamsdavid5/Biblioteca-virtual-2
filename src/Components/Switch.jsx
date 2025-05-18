import './switch.css'

export default function Switch({ bool, setBool }) {
    return (
        <label className="switch">
            <input
                type="checkbox"
                defaultChecked={bool}
                onChange={(e) => setBool(e.target.checked)}
            />
            <span className="slider round"></span>
        </label>
    )
}