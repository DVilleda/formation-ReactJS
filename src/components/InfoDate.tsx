function formatDate(date: Date) {
  return date.toLocaleDateString();
}

function InfoDate(props: any) {
  return <span>Aujourdh'hui c'est le {formatDate(props.date)}</span>;
}

export default InfoDate;
