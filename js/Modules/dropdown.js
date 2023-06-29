export default function initDropdown() {
  const dropdown = document.querySelector('[data-dropdown]')

  function closeDropdown(e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('ativo')
      document.removeEventListener('click', closeDropdown)
    }
  }
  function toggleDropdown(e) {
    e.preventDefault()
    this.classList.toggle('ativo')
    document.addEventListener('click', closeDropdown)
  }

  dropdown.addEventListener('click', toggleDropdown)
}
