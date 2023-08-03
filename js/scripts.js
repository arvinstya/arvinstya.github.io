// JavaScript untuk menampilkan isinya saat folder diklik
document.addEventListener('DOMContentLoaded', () => {
  const folderElements = document.querySelectorAll('.folder');

  folderElements.forEach((folder) => {
    const folderContent = folder.querySelector('.folder-content');
    const folderTitle = folder.querySelector('h2');

    folderTitle.addEventListener('click', () => {
      // Toggle tampilan konten folder (muncul/sembunyi)
      folderContent.style.display = folderContent.style.display === 'block' ? 'none' : 'block';
    });
  });
});
