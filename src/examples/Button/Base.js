import { Button } from "@site/src/remotes";

export default function Base() {
  function handleClick() {
    alert('你点我干嘛！')
  }

  return <Button onClick={handleClick}>点我试试</Button>
}