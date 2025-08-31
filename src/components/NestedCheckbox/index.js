import React, {useState, useEffect} from 'react'
import './index.css'

function NestedCheckbox() {
  const [state, setState] = useState({
    selectAll: false,
    categories: {
      fruits: {
        checked: false,
        indeterminate: false,
        items: {apple: false, banana: false, orange: false},
      },
      vegetables: {
        checked: false,
        indeterminate: false,
        items: {carrot: false, broccoli: false, potato: false},
      },
    },
  })

  function computeCategoryState(items) {
    const values = Object.values(items)
    const all = values.every(Boolean)
    const none = values.every(v => !v)
    return {checked: all, indeterminate: !all && !none}
  }

  useEffect(() => {
    const updates = {...state.categories}
    Object.keys(updates).forEach(cat => {
      const {checked, indeterminate} = computeCategoryState(updates[cat].items)
      updates[cat].checked = checked
      updates[cat].indeterminate = indeterminate
    })
    const selectAllChecked = Object.values(updates).every(cat => cat.checked)
    setState(prev => ({
      ...prev,
      categories: updates,
      selectAll: selectAllChecked,
    }))
    // eslint-disable-next-line
  }, [
    state.categories.fruits.items.apple,
    state.categories.fruits.items.banana,
    state.categories.fruits.items.orange,
    state.categories.vegetables.items.carrot,
    state.categories.vegetables.items.broccoli,
    state.categories.vegetables.items.potato,
  ])

  const getRef = category => el => {
    if (el) el.indeterminate = state.categories[category].indeterminate
  }

  function toggleSelectAll(checked) {
    const updates = {}
    Object.keys(state.categories).forEach(cat => {
      const items = {}
      Object.keys(state.categories[cat].items).forEach(
        item => (items[item] = checked),
      )
      updates[cat] = {checked, indeterminate: false, items}
    })
    setState({selectAll: checked, categories: updates})
  }
  function toggleCategory(cat, checked) {
    const newItems = {}
    Object.keys(state.categories[cat].items).forEach(
      item => (newItems[item] = checked),
    )
    setState(prev => ({
      ...prev,
      categories: {
        ...prev.categories,
        [cat]: {checked, indeterminate: false, items: newItems},
      },
    }))
  }
  function toggleItem(cat, item, checked) {
    const items = {...state.categories[cat].items, [item]: checked}
    const cState = computeCategoryState(items)
    setState(prev => ({
      ...prev,
      categories: {
        ...prev.categories,
        [cat]: {
          checked: cState.checked,
          indeterminate: cState.indeterminate,
          items,
        },
      },
    }))
  }

  return (
    <div className='nested-checkbox-container'>
      <label className='checkbox-label'>
        <input
          type='checkbox'
          checked={state.selectAll}
          onChange={e => toggleSelectAll(e.target.checked)}
        />{' '}
        Select All
      </label>
      {Object.entries(state.categories).map(([cat, catState]) => (
        <div key={cat} className='category-block'>
          <label className='checkbox-label'>
            <input
              type='checkbox'
              checked={catState.checked}
              ref={getRef(cat)}
              onChange={e => toggleCategory(cat, e.target.checked)}
            />
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </label>
          <div className='items-list'>
            {Object.entries(catState.items).map(([item, checked]) => (
              <label key={item} className='checkbox-label item-label'>
                <input
                  type='checkbox'
                  checked={checked}
                  onChange={e => toggleItem(cat, item, e.target.checked)}
                />
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default NestedCheckbox
