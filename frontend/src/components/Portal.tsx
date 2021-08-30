import { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import tw from 'twin.macro'

interface Props {
  children: ReactElement
}

export function Portal(props: Props) {
  let root: HTMLElement | null = null
  root = document.getElementById('portal')
  if (!root) {
    root = document.createElement('div')
    root.setAttribute('id', 'portal')
    document.body.appendChild(root)
  }
  return root && ReactDOM.createPortal(props.children, root)
}

Portal.Overlay = tw.div`fixed top-0 left-0 flex justify-center items-center w-full h-full z-10 bg-black bg-opacity-75 px-4`
