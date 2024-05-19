import { Button } from "remote:glide_components/Base";

export default function Base() {
  function handleClick() {
    alert('你点我干嘛！')
  }

  return <Button onClick={handleClick}>点我试试</Button>
}