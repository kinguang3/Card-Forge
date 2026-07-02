import html2canvas from 'html2canvas';

export async function exportCardToPNG(cardElement: HTMLElement | null): Promise<boolean> {
  if (!cardElement) {
    alert('无法找到卡牌元素，请刷新页面重试');
    return false;
  }

  try {
    const canvas = await html2canvas(cardElement, {
      scale: 3,
      useCORS: true,
      backgroundColor: null,
      logging: false
    });

    const link = document.createElement('a');
    link.download = `card-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    return true;
  } catch (error) {
    console.error('导出失败:', error);
    alert('导出失败，请重试');
    return false;
  }
}