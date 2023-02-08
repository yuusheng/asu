import { createSignal } from 'solid-js'

export default function Counter() {
  const [count, setCount] = createSignal(0)

  return <div class="mt5 flex justify-center">
    <button
      class="p2 bg-white text-black rounded"
      onClick={() => setCount(count() + 1)}
    >
      Count {count()}
    </button>
  </div>
}
