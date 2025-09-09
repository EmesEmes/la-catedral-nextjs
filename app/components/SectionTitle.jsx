const SectionTitle = ({title, subtitle}) => {
  return (
    <div className="text-center my-10">
      <h2 className="uppercase text-4xl font-grotesk">{title}</h2>
      <p>{subtitle}</p>
    </div>
  )
}

export default SectionTitle