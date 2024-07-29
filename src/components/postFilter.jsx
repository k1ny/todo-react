import { MyInput } from './ui/input/my-input'
import { MySelect } from './ui/select/mySelect'

export const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        placeholder="Поиск"
        value={filter.query}
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Сортировка по"
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
      />
    </div>
  )
}
