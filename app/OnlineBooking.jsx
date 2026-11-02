export default function OnlineBooking({ compact = false }) {
  return (
    <div className="online-booking">
      <a href="https://agendamento.avec.beauty/?slug=romanahairstudio" target="_blank" rel="noopener noreferrer" className="online-booking-link">
        Agendar online <span aria-hidden="true">↗</span>
      </a>
      {!compact && <small>Acesse ou cadastre-se no Avec.</small>}
    </div>
  )
}
