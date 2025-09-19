import { useTranslations } from "use-intl"


const Stadistics = () => {
  const t = useTranslations('stadistics')
  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-20 text-black">
      <div className="w-[300px] bg-white p-10 text-center flex flex-col justify-between">
        <p className="text-4xl">+99</p>
        <p className="text-2xl">{t('awards')}</p>
      </div>
      <div className="w-[300px] bg-white p-10 text-center flex flex-col justify-between">
        <p className="text-4xl">+10</p>
        <p className="text-2xl">{t('experience')}</p>
      </div>
      <div className="w-[300px] bg-white p-10 text-center flex flex-col justify-between">
        <p className="text-4xl">+500</p>
        <p className="text-2xl">{t('clients')}</p>
      </div>
    </div>
  )
}

export default Stadistics