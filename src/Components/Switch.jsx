import './switch.css'

export default function Switch({ bool }) {
    return (
        <label class="switch">
            <input type="checkbox" defaultChecked={bool} />
            <span class="slider round"></span>
        </label>
    )
}