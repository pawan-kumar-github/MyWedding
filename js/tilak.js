// ── All Tilak Images ─────────────────────────────────────────────────
const BASE = 'TILAK/';
const images = [
  '_DSC1316.JPG','_DSC1319.JPG','_DSC1322.JPG','_DSC1324.JPG','_DSC1327.JPG',
  '_DSC1329.JPG','_DSC1330.JPG','_DSC1334.JPG','_DSC1337.JPG','_DSC1338.JPG',
  '_DSC1339.JPG','_DSC1340.JPG','_DSC1341.JPG','_DSC1342.JPG','_DSC1344.JPG',
  '_DSC1346.JPG','_DSC1348.JPG','_DSC1349.JPG','_DSC1354.JPG','_DSC1358.JPG',
  '_DSC1382.JPG','_DSC1385.JPG','_DSC1386.JPG','_DSC1388.JPG','_DSC1392.JPG',
  '_DSC1398.JPG','_DSC1430.JPG','_DSC1435.JPG','_DSC1442.JPG','_DSC1444.JPG',
  '_DSC1446.JPG','_DSC1450.JPG','_DSC1451.JPG','_DSC1452.JPG','_DSC1455.JPG',
  '_DSC1458.JPG','_DSC1460.JPG','_DSC1461.JPG','_DSC1463.JPG','_DSC1465.JPG',
  '_DSC1471.JPG','_DSC1473.JPG','_DSC1475.JPG','_DSC1476.JPG','_DSC1478.JPG',
  '_DSC1480.JPG','_DSC1481.JPG','_DSC1489.JPG','_DSC1490.JPG','_DSC1492.JPG',
  '_DSC1493.JPG','_DSC1494.JPG','_DSC1498.JPG','_DSC1503.JPG','_DSC1505.JPG',
  '_DSC1506.JPG','_DSC1507.JPG','_DSC1508.JPG','_DSC1510.JPG','_DSC1511.JPG',
  '_DSC1512.JPG','_DSC1513.JPG','_DSC1515.JPG','_DSC1516.JPG','_DSC1517.JPG',
  '_DSC1518.JPG','_DSC1519.JPG','_DSC1520.JPG','_DSC1521.JPG','_DSC1523.JPG',
  '_DSC1525.JPG','_DSC1529.JPG','_DSC1530.JPG','_DSC1531.JPG','_DSC1532.JPG',
  '_DSC1533.JPG','_DSC1534.JPG','_DSC1539.JPG','_DSC1540.JPG','_DSC1541.JPG',
  '_DSC1543.JPG','_DSC1548.JPG','_DSC1549.JPG','_DSC1550.JPG','_DSC1553.JPG',
  '_DSC1555.JPG','_DSC1556.JPG','_DSC1558.JPG','_DSC1559.JPG','_DSC1563.JPG',
  '_DSC1564.JPG','_DSC1565.JPG','_DSC1566.JPG','_DSC1568.JPG','_DSC1570.JPG',
  '_DSC1572.JPG','_DSC1573.JPG','_DSC1575.JPG','_DSC1576.JPG','_DSC1577.JPG',
  '_DSC1580.JPG','_DSC1581.JPG','_DSC1582.JPG','_DSC1583.JPG','_DSC1584.JPG',
  '_DSC1585.JPG','_DSC1587.JPG','_DSC1589.JPG','_DSC1590.JPG','_DSC1591.JPG',
  '_DSC1592.JPG','_DSC1593.JPG','_DSC1594.JPG','_DSC1595.JPG','_DSC1596.JPG',
  '_DSC1597.JPG','_DSC1598.JPG','_DSC1599.JPG','_DSC1601.JPG','_DSC1602.JPG',
  '_DSC1603.JPG','_DSC1605.JPG','_DSC1606.JPG','_DSC1607.JPG','_DSC1608.JPG',
  '_DSC1610.JPG','_DSC1612.JPG','_DSC1613.JPG','_DSC1614.JPG','_DSC1615.JPG',
  '_DSC1616.JPG','_DSC1617.JPG','_DSC1618.JPG','_DSC1619.JPG','_DSC1620.JPG',
  '_DSC1621.JPG','_DSC1624.JPG','_DSC1625.JPG','_DSC1626.JPG','_DSC1628.JPG',
  '_DSC1629.JPG','_DSC1630.JPG','_DSC1631.JPG','_DSC1632.JPG','_DSC1633.JPG',
  '_DSC1634.JPG','_DSC1635.JPG','_DSC1636.JPG','_DSC1638.JPG','_DSC1639.JPG',
  '_DSC1640.JPG','_DSC1641.JPG','_DSC1643.JPG','_DSC1645.JPG','_DSC1646.JPG',
  '_DSC1647.JPG','_DSC1648.JPG','_DSC1649.JPG','_DSC1650.JPG','_DSC1651.JPG',
  '_DSC1652.JPG','_DSC1653.JPG','_DSC1654.JPG','_DSC1656.JPG','_DSC1657.JPG',
  '_DSC1658.JPG','_DSC1659.JPG','_DSC1661.JPG','_DSC1662.JPG','_DSC1663.JPG',
  '_DSC1664.JPG','_DSC1665.JPG','_DSC1666.JPG','_DSC1669.JPG','_DSC1672.JPG',
  '_DSC1674.JPG','_DSC1675.JPG','_DSC1676.JPG','_DSC1677.JPG','_DSC1678.JPG',
  '_DSC1682.JPG','_DSC1683.JPG','_DSC1687.JPG','_DSC1696.JPG','_DSC1698.JPG',
  '_DSC1706.JPG','_DSC1714.JPG','_DSC1718.JPG','_DSC1730.JPG','_DSC1734.JPG',
  '_DSC1737.JPG','_DSC1741.JPG','_DSC1744.JPG','_DSC1747.JPG','_DSC1762.JPG',
  '_DSC1763.JPG','_DSC1764.JPG','_DSC1765.JPG','_DSC1769.JPG','_DSC1771.JPG',
  '_DSC1772.JPG','_DSC1773.JPG','_DSC1774.JPG','_DSC1776.JPG','_DSC1778.JPG',
  '_DSC1781.JPG','_DSC1785.JPG','_DSC1787.JPG','_DSC1790.JPG','_DSC1791.JPG',
  '_DSC1793.JPG','_DSC1794.JPG','_DSC1796.JPG','_DSC1797.JPG','_DSC1798.JPG',
  '_DSC1802.JPG','_DSC1803.JPG','_DSC1804.JPG','_DSC1807.JPG','_DSC1808.JPG',
  '_DSC1810.JPG','_DSC1816.JPG','_DSC1817.JPG','_DSC1820.JPG','_DSC1822.JPG',
  '_DSC1823.JPG','_DSC1824.JPG','_DSC1826.JPG','_DSC1835.JPG','_DSC1836.JPG',
  '_DSC1837.JPG','_DSC1838.JPG','_DSC1839.JPG','_DSC1840.JPG','_DSC1841.JPG',
  '_DSC1842.JPG','_DSC1845.JPG','_DSC1847.JPG','_DSC1849.JPG','_DSC1850.JPG',
  '_DSC1851.JPG','_DSC1852.JPG','_DSC1854.JPG','_DSC1856.JPG','_DSC1858.JPG',
  '_DSC1859.JPG','_DSC1860.JPG','_DSC1861.JPG','_DSC1862.JPG','_DSC1863.JPG',
  '_DSC1865.JPG','_DSC1867.JPG','_DSC1868.JPG','_DSC1869.JPG','_DSC1870.JPG',
  '_DSC1871.JPG','_DSC1872.JPG','_DSC1873.JPG','_DSC1874.JPG','_DSC1877.JPG',
  '_DSC1879.JPG','_DSC1881.JPG','_DSC1882.JPG','_DSC1883.JPG','_DSC1885.JPG',
  '_DSC1887.JPG','_DSC1889.JPG','_DSC1890.JPG','_DSC1891.JPG','_DSC1892.JPG',
  '_DSC1894.JPG','_DSC1895.JPG','_DSC1896.JPG','_DSC1898.JPG','_DSC1899.JPG',
  '_DSC1900.JPG','_DSC1901.JPG','_DSC1902.JPG','_DSC1903.JPG','_DSC1904.JPG',
  '_DSC1906.JPG','_DSC1907.JPG','_DSC1909.JPG','_DSC1910.JPG','_DSC1911.JPG',
  '_DSC1912.JPG','_DSC1913.JPG','_DSC1915.JPG','_DSC1918.JPG','_DSC1919.JPG'
];

const BATCH   = 30;
let shown     = 0;

const grid    = document.getElementById('galleryGrid');
const countEl = document.getElementById('galleryCount');
const btnMore = document.getElementById('btnLoadMore');
const btnAll  = document.getElementById('btnLoadAll');

// ── Gallery Builder ───────────────────────────────────────────────────
function updateCount() {
  countEl.textContent = `Showing ${shown} of ${images.length} photos`;
  btnMore.disabled = shown >= images.length;
  btnAll.disabled  = shown >= images.length;
}

function addItems(start, end) {
  const frag = document.createDocumentFragment();
  for (let i = start; i < end && i < images.length; i++) {
    const item = document.createElement('div');
    item.className = 'gallery-item';

    const img = document.createElement('img');
    img.src      = BASE + images[i];
    img.alt      = `Tilak ceremony photo ${i + 1}`;
    img.loading  = 'lazy';
    img.decoding = 'async';

    const overlay = document.createElement('div');
    overlay.className = 'item-overlay';
    overlay.innerHTML = '<span class="zoom-icon">⊕</span>';

    item.appendChild(img);
    item.appendChild(overlay);
    item.addEventListener('click', () => openLightbox(i));
    frag.appendChild(item);
  }
  grid.appendChild(frag);
}

function loadMore() {
  const next = Math.min(shown + BATCH, images.length);
  addItems(shown, next);
  shown = next;
  updateCount();
}

function loadAll() {
  addItems(shown, images.length);
  shown = images.length;
  updateCount();
}

btnMore.addEventListener('click', loadMore);
btnAll.addEventListener('click', loadAll);

// Initial load
loadMore();

// ── Lightbox ──────────────────────────────────────────────────────────
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lb-img');
const lbCounter = document.getElementById('lb-counter');
const lbClose   = document.getElementById('lb-close');
const lbPrev    = document.getElementById('lb-prev');
const lbNext    = document.getElementById('lb-next');
let currentIdx  = 0;

function openLightbox(idx) {
  currentIdx = idx;
  setLbImage(idx);
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function setLbImage(idx) {
  lbImg.classList.add('loading');
  const tmp = new Image();
  tmp.onload = () => {
    lbImg.src = tmp.src;
    lbImg.classList.remove('loading');
  };
  tmp.src = BASE + images[idx];
  lbCounter.textContent = `${idx + 1} / ${images.length}`;
}

function lbGo(dir) {
  currentIdx = (currentIdx + dir + images.length) % images.length;
  setLbImage(currentIdx);
}

lbClose.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', () => lbGo(-1));
lbNext.addEventListener('click', () => lbGo(1));
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   lbGo(-1);
  if (e.key === 'ArrowRight')  lbGo(1);
});

// Touch swipe
let touchStartX = 0;
lightbox.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });
lightbox.addEventListener('touchend', (e) => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) lbGo(dx < 0 ? 1 : -1);
});
