import globals from '../../styles/globals.module.scss'

const SectionWrapper = (Component:any, className:string, idName:string, container:string="") => 

function HOC() {
  return (
    <section className={className} id={idName}> 
      <div className={`${globals.container} ${container}`}>
        <Component />
      </div>
    </section>
  )
}

export default SectionWrapper