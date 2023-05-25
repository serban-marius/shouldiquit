import React from 'react'
import { getRandom } from '../helpers/constans'

interface IWidget {
  reason: string[]
}
const Widget = (props: IWidget) => {
  const [reason, setReasons] = React.useState<string[]>()

  React.useEffect(() => {
    updateReasons()
    document.addEventListener('keydown', onSpacePressOrClick)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
   * On hitting Space reload reasons
   * @return void
   */
  const onSpacePressOrClick = (event: { type: string; keyCode?: number }) => {
    if (event.type === 'click' || event?.keyCode == 32) {
      updateReasons()
    }
  }

  /**
   * update and get random reasons
   * @return void
   */
  const updateReasons = () => {
    setReasons(getRandom())
  }

  /**
   * Render widget
   * @return JSX.Element
   */
  return (
    <div className="item">
      <h3 className="tagline">Should I Quit Today?</h3>
      <h2 id="text" className="reason">
        {reason?.[0]}
      </h2>
      <a
        className="bookquote"
        target="_blank"
        rel="noopener noreferrer"
        href={reason?.[2]}
      >
        {reason?.[1]}
      </a>
      <br></br>
      <span id="reload" onClick={onSpacePressOrClick}>
        Hit <span className="space-btn">Space</span> or Click
      </span>
    </div>
  )
}

export default Widget
