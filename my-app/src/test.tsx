const today = new Date();

function formatDate(date: Date | number) {
  return new Intl.DateTimeFormat('zh-CN', {weekday: 'short'}).format(date)

}
const person = {
  name: 'fsy',
  theme: {
    background: 'white',
    color: 'pink'
  }
}

export default function Profile() {


  return (
    <div style={ person.theme }>{formatDate(today)}
      {person.name}
    </div>

  )
}