import OnlineBooking from './OnlineBooking'

export default function HeaderBooking({ whatsapp }) {
  return <div className="header-booking-actions">
    <a className="header-whatsapp-link" href={whatsapp} target="_blank" rel="noopener noreferrer">Agendar WhatsApp <span aria-hidden="true">↗</span></a>
    <OnlineBooking compact />
  </div>
}
