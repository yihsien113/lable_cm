const vendorData = [
    { id: "A00001", name: "正豐" }, { id: "A00002", name: "永順" }, { id: "A00003", name: "力泰" },
    { id: "A00004", name: "日昶" }, { id: "A00005", name: "永昌" }, { id: "A00006", name: "福久" },
    { id: "A00008", name: "長洲" }, { id: "A00009", name: "宏元" }, { id: "A00011", name: "順合" },
    { id: "A00012", name: "宏久" }, { id: "A00014", name: "東春" }, { id: "A00015", name: "中興" },
    { id: "A00018", name: "勝新" }, { id: "A00022", name: "富達" }, { id: "A00024", name: "鴻泰" },
    { id: "A00025", name: "冠陞" }, { id: "A00027", name: "中壢世豐" }, { id: "A00028", name: "信昌" },
    { id: "A00029", name: "金鼎" }, { id: "A00030", name: "壢昌" }, { id: "A00031", name: "眾南" },
    { id: "A00033", name: "良記" }, { id: "A00035", name: "順吉" }, { id: "A00036", name: "福合" },
    { id: "A00039", name: "興曜" }, { id: "A00043", name: "德霖" }, { id: "A00045", name: "協隆" },
    { id: "A00046", name: "敦揚" }, { id: "A00050", name: "慶誠" }, { id: "A00053", name: "嘉興" },
    { id: "A00054", name: "明德" }, { id: "A00057", name: "億芬" }, { id: "A00060", name: "木泉號" },
    { id: "A00061", name: "廣山" }, { id: "A00062", name: "正佳" }, { id: "A00066", name: "昇旻" },
    { id: "A00067", name: "成洲" }, { id: "A00068", name: "展慶" }, { id: "A00070", name: "聖泥" },
    { id: "A00071", name: "台揚" }, { id: "A00073", name: "雅山竹" }, { id: "A00074", name: "嘉麗雅" },
    { id: "A00075", name: "新協興" }, { id: "A00076", name: "秝鋒" }, { id: "A00078", name: "宸豐" },
    { id: "A00079", name: "金品" }, { id: "A00080", name: "八德世豐" }, { id: "A00081", name: "益慶" },
    { id: "A00082", name: "羚木" }, { id: "A00083", name: "崇泰" }, { id: "A00085", name: "華泰" },
    { id: "A00087", name: "世雅" }, { id: "A00088", name: "義興" }, { id: "A00090", name: "德立" },
    { id: "A00093", name: "坤英" }, { id: "A00096", name: "東鴻" }, { id: "A00099", name: "福豐" },
    { id: "A00101", name: "康宇" }, { id: "A00102", name: "元津" }, { id: "A00103", name: "朝新" },
    { id: "A00105", name: "唐德" }, { id: "A00107", name: "永興" }, { id: "A00109", name: "銪成" },
    { id: "A00111", name: "舜菖" }, { id: "A00112", name: "廣聯" }, { id: "A00113", name: "台騰" },
    { id: "A00115", name: "華興" }, { id: "A00119", name: "佳承" }, { id: "A00122", name: "中華" },
    { id: "A00127", name: "鈺加" }, { id: "A00128", name: "祈美" }, { id: "A00129", name: "永勝" },
    { id: "A00130", name: "喬云" }, { id: "A00131", name: "立山" }, { id: "A00134", name: "昱門" },
    { id: "A00136", name: "統一" }, { id: "A00137", name: "新竹永昌" }, { id: "A00138", name: "元亨" },
    { id: "A00139", name: "竹北" }, { id: "A00144", name: "勝利" }, { id: "A00146", name: "福展" },
    { id: "A00148", name: "竹駿" }, { id: "A00160", name: "青松" }, { id: "C00006", name: "李振吉" },
    { id: "C00082", name: "宜安" }, { id: "C00084", name: "詠昕" }, { id: "C00087", name: "昕育" },
    { id: "C00090", name: "王冠傑" }, { id: "C00101", name: "橙石" }, { id: "C00110", name: "一站材料" },
    { id: "C00111", name: "謝昌德" }, { id: "C00112", name: "耀澄" }, { id: "C00113", name: "聖儒" },
    { id: "D00011", name: "晟暉" }, { id: "D00019", name: "莊謹謙" }, { id: "D00020", name: "睿翔" },
    { id: "E00001", name: "鄭書銘大帥" }, { id: "E00008", name: "喬鴻" }, { id: "E00010", name: "詹勳杞" },
    { id: "E00017", name: "黎傳圓" }, { id: "E00018", name: "希望義工團" }, { id: "E00040", name: "歐道鈐" },
    { id: "E00148", name: "鵬程" },
    { id: "E00179", name: "新生木業" }, { id: "E00189", name: "佳美" }, { id: "E00204", name: "世豐木業" }
];

const accessoryPriority = {
        "集成": 10,
        "實木": 10,
        "永集": 10,
        "集6分": 10,
        "+岩棉": 10,
        "+料": 10,
        "左右+1支": 10,
        "四邊+1支": 10,
        "鎖+強": 10,
        "+洞": 10,
        "+保麗龍": 10,
        "+鎖洞▲": 18, 
        "+鎖洞▼": 18, 
        "+門擋料": 20,
        "+丁雙洞": 20,
        "+左右封邊": 20,
        "+四邊封邊": 20,
        "皮封四邊": 20,
    };

    const dropdownOptions = [
       "實木", "集成" , "永集" , "集6分" , "+料", "左右+1支", "四邊+1支" , "+岩棉", "+洞", "鎖+強" , "+鎖洞▲", "+鎖洞▼", "+左右封邊", "+四邊封邊", "附左右封邊皮",  
        "+門擋料" , "+丁雙洞" , "+保麗龍" ,  "組裝五金-喇房", "組裝五金-喇廁", "組裝五金-水房", "組裝五金-水廁", "烤雕", 
        "幸福丁雙", "雷克拉丁雙" , "皮封四邊", "內左", "內右", "外左", "外右"
    ];

const datalist = document.createElement('datalist');
datalist.id = 'shared-dropdown-options';
dropdownOptions.forEach(opt => {
    const option = document.createElement('option');
    option.value = opt;
    datalist.appendChild(option);
});
document.body.appendChild(datalist);

function parseAndSortRemarks(rawText) {
    if (!rawText) return { midSelects: [], midText: "" };
    
    // 1. 自動校正：把 ↑ 和 ↓ 換成 ▲ 和 ▼
    let standardizedText = rawText
        .replace(/\+鎖洞↑/g, '+鎖洞▲')
        .replace(/\+鎖洞↓/g, '+鎖洞▼');

    // 2. 換行轉空格
    let cleanRaw = standardizedText.replace(/[\r\n]+/g, ' ');
    
    // 3. 複合詞保護 (改良版)：直接把特定關鍵字內的 '+' 換成 '_PLUS_' 避免被誤切
    let protectedText = cleanRaw
        .replace(/鎖\+強/g, '鎖_PLUS_強')
        .replace(/左右\+1支/g, '左右_PLUS_1支')
        .replace(/四邊\+1支/g, '四邊_PLUS_1支')
        .replace(/四\+1支/g, '四_PLUS_1支');

    // 4. 將剩下的 '+' 前面統一補上空格，確保像 "皮封四邊+岩棉" 能被順利拆開
    let formattedText = protectedText.replace(/\+/g, ' +');
    
    // 5. 利用空格、逗號、斜線進行切割
    let rawItems = formattedText.split(/[\s\/,]+/);
    
    // 6. 將保護的符號 '_PLUS_' 還原回 '+'
    rawItems = rawItems.map(item => item.replace(/_PLUS_/g, '+'));
    
    // 7. 智慧過濾機制：過濾出白名單、選單選項或 +鎖洞組合
    let validItems = rawItems.filter(item => {
        let baseKey = item.replace(/[\d.]+$/, '');
        if (accessoryPriority.hasOwnProperty(baseKey)) return true;
        if (dropdownOptions.includes(baseKey)) return true; // 允許額外的五金與加工選項
        if (/^\+鎖洞[▲▼][\d.]+$/.test(item)) return true;
        return false;
    });

    if (validItems.length === 0) {
        return { midSelects: [], midText: "" };
    }

    // 8. 排序機制
    validItems.sort((a, b) => {
        let keyA = a.replace(/[\d.]+$/, '');
        let keyB = b.replace(/[\d.]+$/, '');
        let valA = accessoryPriority.hasOwnProperty(keyA) ? accessoryPriority[keyA] : (/^\+鎖洞[▲▼]/.test(a) ? 20 : 99);
        let valB = accessoryPriority.hasOwnProperty(keyB) ? accessoryPriority[keyB] : (/^\+鎖洞[▲▼]/.test(b) ? 20 : 99);
        return valA - valB;
    });
    
    let finalSet = [...new Set(validItems)];
    let midSelects = [];
    let midTextArray = [];

    // 直接將所有符合選單項目的塞進唯一的 midSelects
    finalSet.forEach(item => {
        let baseKey = item.replace(/[\d.]+$/, ''); 
        if (dropdownOptions.includes(baseKey)) {
            midSelects.push(item);
        } else {
            midTextArray.push(item);
        }
    });

    return { 
        midSelects: midSelects, 
        midText: midTextArray.join(".")
    };
}

const vendorModal = document.getElementById('vendorModal');
const vendorInput = document.getElementById('vendorInput');
const vendorDropdown = document.getElementById('vendorDropdown');
const previewVendor = document.getElementById('preview-vendor');

let currentHighlightIndex = -1;
let filteredVendors = [];

function openVendorModal() {
    if (!vendorModal) return;
    vendorModal.style.display = 'flex';
    let currentName = previewVendor.innerText.trim();
    if(currentName === '廠商名稱') currentName = '';
    vendorInput.value = currentName;
    vendorDropdown.style.display = 'none';
    
    setTimeout(() => {
        vendorInput.focus();
        vendorInput.select();
    }, 100);
}

function closeVendorModal(e) {
    if (!vendorModal) return;
    if(e && e.target !== vendorModal) return; 
    vendorModal.style.display = 'none';
}

function applyVendor() {
    if (!vendorInput || !previewVendor) return;
    const val = vendorInput.value.trim();
    if(val) {
        previewVendor.innerText = val;
    } else {
        previewVendor.innerText = '廠商名稱';
    }
    autoFitLeft(previewVendor);
    if (vendorModal) vendorModal.style.display = 'none';
}

if (vendorInput && vendorDropdown) {
    vendorInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        currentHighlightIndex = -1;
        
        if (!query) {
            vendorDropdown.style.display = 'none';
            return;
        }
        
        filteredVendors = vendorData.filter(v => 
            v.id.toLowerCase().includes(query) || v.name.toLowerCase().includes(query)
        );
        
        renderDropdown();
    });

    vendorInput.addEventListener('keydown', function(e) {
        const items = vendorDropdown.querySelectorAll('li');
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (vendorDropdown.style.display === 'block' && currentHighlightIndex < items.length - 1) {
                currentHighlightIndex++;
                updateHighlight();
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (vendorDropdown.style.display === 'block' && currentHighlightIndex > 0) {
                currentHighlightIndex--;
                updateHighlight();
            }
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (vendorDropdown.style.display === 'block' && currentHighlightIndex >= 0) {
                vendorInput.value = filteredVendors[currentHighlightIndex].name;
                vendorDropdown.style.display = 'none';
                currentHighlightIndex = -1;
            } else {
                applyVendor();
            }
        }
    });
}

function renderDropdown() {
    if (!vendorDropdown) return;
    if (filteredVendors.length === 0) {
        vendorDropdown.style.display = 'none';
        return;
    }
    
    vendorDropdown.innerHTML = '';
    filteredVendors.forEach((v, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${v.name}</span> <span class="vendor-id">${v.id}</span>`;
        
        li.onclick = () => {
            vendorInput.value = v.name;
            applyVendor();
        };
        
        li.onmouseenter = () => {
            currentHighlightIndex = index;
            updateHighlight();
        };
        
        vendorDropdown.appendChild(li);
    });
    vendorDropdown.style.display = 'block';
}

function updateHighlight() {
    if (!vendorDropdown) return;
    const items = vendorDropdown.querySelectorAll('li');
    items.forEach((item, index) => {
        if (index === currentHighlightIndex) {
            item.classList.add('active');
            item.scrollIntoView({ block: 'nearest' });
        } else {
            item.classList.remove('active');
        }
    });
}

const heightInput = document.getElementById('height');
const widthInput = document.getElementById('width');
const resultTai = document.getElementById('resultTai');
const resultCm = document.getElementById('resultCm');
const labelItem1 = document.getElementById('label-item-1');
const labelItem3 = document.getElementById('label-item-3');
const batchListContainer = document.getElementById('batchListContainer');
const batchCountTitle = document.getElementById('batch-count-title');
const batchPrintContainer = document.getElementById('batch-print-container');

let batchItems = [];
let editIndex = -1; 

function resetEditMode() {
    editIndex = -1;
    const btnAdd = document.querySelector('.btn-add');
    if (btnAdd) {
        btnAdd.innerText = '加入批次清單';
        btnAdd.style.backgroundColor = '#ff9500';
    }
}

function selectAllText(el) {
    if (el.dataset.isSelected === 'true') return;
    const selection = window.getSelection();
    if (!selection) return;
    const range = document.createRange();
    range.selectNodeContents(el);
    selection.removeAllRanges();
    selection.addRange(range);
    el.dataset.isSelected = 'true';
    el.addEventListener('blur', function onBlur() {
        el.dataset.isSelected = 'false';
        el.removeEventListener('blur', onBlur);
    });
}

function getCleanText(el) {
    return (el.innerText || '').replace(/\r?\n/g, '').trim();
}

function autoFit(el, defaultSize = 22) {
    if (!el) return '';
    let currentSize = defaultSize;
    el.style.fontSize = currentSize + 'px';
    while (
        (Math.ceil(el.scrollHeight) > Math.floor(el.clientHeight) + 1) ||
        (Math.ceil(el.scrollWidth) > Math.floor(el.clientWidth) + 1)
    ) {
        if (currentSize <= 6) break;
        currentSize -= 0.5;
        el.style.fontSize = currentSize + 'px';
    }
    return el.style.fontSize;
}

function autoFitLeft(el) { return autoFit(el, 40); }
function autoFitRight(el) { return autoFit(el, 22); }

function calculateTai(val) {
    let v = val * 3.3;
    let intV = Math.floor(v);
    let cond1 = Math.floor(v + 0.6) === intV + 1;
    let cond2 = Math.floor(v + 0.3) === intV + 1;
    if (cond1 && !cond2) return intV + 0.5;
    if (cond1 && cond2) return intV + 1;
    return intV;
}

function updateLabelKeepText(labelEl, newDim, isCm) {
    if (!labelEl) return;
    let currentText = (labelEl.innerText || '').replace(/\r?\n/g, '');
    let regex = isCm ? /^[\d.]+\s*\*\s*[\d.]+\s*cm/i : /^[\d.]+\s*\*\s*[\d.]+/;
    if (currentText.trim() === '') {
        labelEl.innerText = newDim;
    } else if (regex.test(currentText)) {
        labelEl.innerText = currentText.replace(regex, newDim);
    } else {
        labelEl.innerText = newDim + ' ' + currentText;
    }
}

function clearLabelDimension(labelEl, isCm) {
    if (!labelEl) return;
    let currentText = (labelEl.innerText || '').replace(/\r?\n/g, '');
    let regex = isCm ? /^[\d.]+\s*\*\s*[\d.]+\s*cm\s*/i : /^[\d.]+\s*\*\s*[\d.]+\s*/;
    labelEl.innerText = currentText.replace(regex, '');
}

function updateCalculations() {
    if (!heightInput || !widthInput) return;
    const hVal = parseFloat(heightInput.value);
    const wVal = parseFloat(widthInput.value);

    if (!isNaN(hVal) && !isNaN(wVal) && hVal > 0 && wVal > 0) {
        const taiStr = `${calculateTai(hVal)}*${calculateTai(wVal)}`;
        const cmStr = `${hVal}*${wVal}cm`;

        if (resultTai) resultTai.value = taiStr;
        if (resultCm) resultCm.value = cmStr;

        updateLabelKeepText(labelItem1, taiStr, false);
        updateLabelKeepText(labelItem3, cmStr, true);

        autoFitRight(labelItem1);
        autoFitRight(labelItem3);
    } else {
        if (resultTai) resultTai.value = '';
        if (resultCm) resultCm.value = '';

        clearLabelDimension(labelItem1, false);
        clearLabelDimension(labelItem3, true);

        autoFitRight(labelItem1);
        autoFitRight(labelItem3);
    }
}

function copyResult(elementId) {
    const targetInput = document.getElementById(elementId);
    if (!targetInput || !targetInput.value) return;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(targetInput.value).then(() => {
            clearSizeInputs();
        }).catch(() => {
            fallbackCopy(targetInput);
        });
    } else {
        fallbackCopy(targetInput);
    }
}

function fallbackCopy(targetInput) {
    targetInput.select();
    document.execCommand('copy');
    clearSizeInputs();
}

function clearSizeInputs() {
    if (heightInput) {
        heightInput.value = '';
        heightInput.focus();
    }
    if (widthInput) widthInput.value = '';
}

function handleManualEdit(el, fieldName) {
    autoFitRight(el);
}

function focusEditable(line) {
    const el = document.getElementById(`label-item-${line}`);
    if(el) el.focus();
}

function addSelect(lineNumber) {
    const container = document.getElementById(`select-container-${lineNumber}`);
    if(!container) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'select-wrapper';
    wrapper.draggable = true;
    wrapper.id = 'select-wrapper-' + Date.now() + '-' + Math.floor(Math.random() * 1000);

    const input = document.createElement('input');
    input.type = 'text';
    input.setAttribute('list', 'shared-dropdown-options');
    input.placeholder = '選擇或輸入';
    input.className = 'custom-select-input';

    const delBtn = document.createElement('button');
    delBtn.textContent = '✕';
    delBtn.className = 'btn-del-select';
    delBtn.onclick = function() {
        wrapper.remove();
        updateLabelFromSelects(lineNumber);
    };

    input.oninput = function() { updateLabelFromSelects(lineNumber); };

    wrapper.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', wrapper.id);
        e.dataTransfer.effectAllowed = 'move';
        wrapper.style.opacity = '0.5';
    });
    wrapper.addEventListener('dragend', () => { wrapper.style.opacity = '1'; });

    wrapper.appendChild(input);
    wrapper.appendChild(delBtn);
    container.appendChild(wrapper);
}

// 橫向 X 軸拖曳排序
function getDragAfterElementHorizontal(container, x) {
    const draggableElements = [...container.querySelectorAll('.select-wrapper:not([style*="opacity: 0.5"])')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = x - (box.left + box.width / 2);
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

const container2 = document.getElementById('select-container-2');
if(container2) {
    container2.addEventListener('dragover', (e) => {
        e.preventDefault();
        container2.style.backgroundColor = 'rgba(0, 122, 255, 0.05)';
    });
    container2.addEventListener('dragleave', () => { container2.style.backgroundColor = ''; });
    container2.addEventListener('drop', (e) => {
        e.preventDefault();
        container2.style.backgroundColor = '';
        const draggedId = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(draggedId);
        if (draggedElement) {
            const afterElement = getDragAfterElementHorizontal(container2, e.clientX);
            if (afterElement == null) {
                container2.appendChild(draggedElement);
            } else {
                container2.insertBefore(draggedElement, afterElement);
            }
            updateLabelFromSelects(2);
        }
    });
}

function updateLabelFromSelects(line) {
    const container = document.getElementById(`select-container-${line}`);
    if (!container) return;
    const inputs = container.querySelectorAll('input');
    const values = Array.from(inputs).map(input => input.value.trim()).filter(v => v !== '');
    
    const tagsEl = document.getElementById(`label-tags-${line}`);
    if(tagsEl) {
        tagsEl.textContent = values.length > 0 ? (' ' + values.join('.')) : '';
    }
    const wrapperEl = document.getElementById(`label-wrapper-${line}`);
    if(wrapperEl) handleManualEdit(wrapperEl, `line${line}`);
}

function getSelects(line) {
    const container = document.getElementById(`select-container-${line}`);
    if(!container) return [];
    return Array.from(container.querySelectorAll(`input`)).map(inp => inp.value.trim()).filter(v => v !== '');
}

function addToBatch() {
    const vendor = getCleanText(previewVendor);
    const line1 = getCleanText(labelItem1);
    const line2Wrapper = document.getElementById('label-wrapper-2');
    const line2 = getCleanText(line2Wrapper);
    const line3 = getCleanText(labelItem3);

    if (!line1 && !line3) {
        alert('請先輸入有效的高與寬！');
        return;
    }

    const newItem = {
        vendor: vendor || '廠商名稱',
        line1: line1,
        line2: line2,
        line3: line3,
        line2Text: getCleanText(document.getElementById('label-item-2')),
        line2Selects: getSelects(2),
        vendorFs: autoFitLeft(previewVendor),
        line1Fs: autoFitRight(labelItem1),
        line2Fs: autoFitRight(line2Wrapper),
        line3Fs: autoFitRight(labelItem3),
        selected: false
    };

    if (editIndex !== -1) {
        batchItems[editIndex] = newItem;
        resetEditMode();
    } else {
        batchItems.push(newItem);
    }

    updateBatchUI();
    if (heightInput) heightInput.select();
}

function editBatchItem(index) {
    const item = batchItems[index];
    editIndex = index;

    if (previewVendor) previewVendor.innerText = item.vendor;
    if (labelItem1) labelItem1.innerText = item.line1;
    if (labelItem3) labelItem3.innerText = item.line3;

    const line2Item = document.getElementById('label-item-2');
    if (line2Item) line2Item.innerText = item.line2Text !== undefined ? item.line2Text : (item.line2 || '');
    
    const targetContainer = document.getElementById('select-container-2');
    if (targetContainer) {
        targetContainer.innerHTML = '';
        if (item.line2Selects) {
            item.line2Selects.forEach(val => {
                addSelect(2);
                const inputs = targetContainer.querySelectorAll('input');
                if(inputs.length > 0) inputs[inputs.length - 1].value = val;
            });
        }
        updateLabelFromSelects(2);
    }

    autoFitLeft(previewVendor);
    autoFitRight(labelItem1);
    autoFitRight(document.getElementById('label-wrapper-2'));
    autoFitRight(labelItem3);

    if (heightInput) heightInput.value = '';
    if (widthInput) widthInput.value = '';

    const btnAdd = document.querySelector('.btn-add');
    if (btnAdd) {
        btnAdd.innerText = '儲存修改';
        btnAdd.style.backgroundColor = '#007aff';
    }
    
    updateBatchUI();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateBatchUI() {
    if (batchCountTitle) batchCountTitle.innerText = `待列印清單 (${batchItems.length} 張)`;
    if (!batchListContainer) return;

    const batchControls = document.getElementById('batch-controls');
    if (batchItems.length > 0) {
        batchControls.style.display = 'flex';
    } else {
        batchControls.style.display = 'none';
    }

    batchListContainer.innerHTML = '';
    batchItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = index === editIndex ? 'batch-item editing' : 'batch-item';

        const line2Display = item.line2 ? ` / ${item.line2}` : '';
        const isChecked = item.selected ? 'checked' : '';

        div.innerHTML = `
            <div style="display:flex; align-items:flex-start; gap:15px; flex:1 1 auto; min-width:0; overflow:visible;">
                <input type="checkbox" class="batch-checkbox" ${isChecked} onchange="toggleItemSelection(${index}, this)">
                <span class="batch-item-text">
                    #${index + 1}
                    [${escapeHtml(item.vendor)}]
                    ${escapeHtml(item.line1)}
                    ${line2Display}
                    /
                    ${escapeHtml(item.line3)}
                </span>
            </div>
            <div class="batch-item-actions">
                <button class="btn-edit" onclick="editBatchItem(${index})" title="載入上方預覽區編輯">編輯</button>
                <button class="btn-remove" onclick="removeBatchItem(${index})" title="刪除這張">✕</button>
            </div>
        `;
        batchListContainer.appendChild(div);
    });
    updateSelectAllStatus();
}

function toggleSelectAll(checkbox) {
    batchItems.forEach(item => item.selected = checkbox.checked);
    updateBatchUI();
}

function toggleItemSelection(index, checkbox) {
    batchItems[index].selected = checkbox.checked;
    updateSelectAllStatus();
}

function updateSelectAllStatus() {
    const selectAllCb = document.getElementById('selectAllCheckbox');
    if (!selectAllCb) return;
    selectAllCb.checked = batchItems.length > 0 && batchItems.every(item => item.selected);
}

function applyToSelected() {
    const selectedItems = batchItems.filter(item => item.selected);
    if (selectedItems.length === 0) {
        alert('請先勾選清單中要修改的標籤！');
        return;
    }

    const newVendor = getCleanText(previewVendor) || '廠商名稱';
    const newVendorFs = autoFitLeft(previewVendor);
    
    const line2Wrapper = document.getElementById('label-wrapper-2');
    const newLine2 = getCleanText(line2Wrapper);
    const newLine2Fs = autoFitRight(line2Wrapper);
    const newLine2Text = getCleanText(document.getElementById('label-item-2'));
    const newLine2Selects = getSelects(2);

    const currentL1 = getCleanText(labelItem1);
    const currentL3 = getCleanText(labelItem3);
    
    const taiRegex = /^[\d.]+\s*\*\s*[\d.]+\s*/;
    const cmRegex = /^[\d.]+\s*\*\s*[\d.]+\s*cm\s*/i;
    
    const attachL1 = currentL1.replace(taiRegex, '').trim();
    const attachL3 = currentL3.replace(cmRegex, '').trim();

    batchItems.forEach(item => {
        if (item.selected) {
            item.vendor = newVendor;
            item.vendorFs = newVendorFs;
            
            item.line2 = newLine2;
            item.line2Fs = newLine2Fs;
            item.line2Text = newLine2Text;
            item.line2Selects = [...newLine2Selects];

            const origDimL1 = item.line1.match(taiRegex) ? item.line1.match(taiRegex)[0].trim() : '';
            item.line1 = attachL1 ? `${origDimL1} ${attachL1}`.trim() : origDimL1;
            
            const origDimL3 = item.line3.match(cmRegex) ? item.line3.match(cmRegex)[0].trim() : '';
            item.line3 = attachL3 ? `${origDimL3} ${attachL3}`.trim() : origDimL3;
            
            item.selected = false;
        }
    });

    updateBatchUI();
}

function escapeHtml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function removeBatchItem(index) {
    if (index < 0 || index >= batchItems.length) return;
    batchItems.splice(index, 1);
    
    if (editIndex === index) {
        resetEditMode();
    } else if (editIndex > index) {
        editIndex--;
    }
    updateBatchUI();
}

function clearBatch() {
    if (batchItems.length === 0) return;
    batchItems = [];
    resetEditMode();
    updateBatchUI();
}

function createPrintPage(item) {
    const pageDiv = document.createElement('div');
    pageDiv.className = 'print-page';

    const labelGrid = document.createElement('div');
    labelGrid.className = 'label-grid';

    const vendorCell = document.createElement('div');
    vendorCell.className = 'grid-cell col-left';
    const vendorText = document.createElement('div');
    vendorText.className = 'auto-fit-left';
    vendorText.style.fontSize = item.vendorFs || '16px';
    vendorText.textContent = item.vendor || '廠商名稱';
    vendorCell.appendChild(vendorText);

    const line1Cell = document.createElement('div');
    line1Cell.className = 'grid-cell';
    const line1Text = document.createElement('div');
    line1Text.className = 'auto-fit-right';
    line1Text.style.fontSize = item.line1Fs || '22px';
    line1Text.textContent = item.line1 || '';
    line1Cell.appendChild(line1Text);

    const line2Cell = document.createElement('div');
    line2Cell.className = 'grid-cell';
    const line2Text = document.createElement('div');
    line2Text.className = 'auto-fit-right';
    line2Text.style.fontSize = item.line2Fs || '22px';
    line2Text.textContent = item.line2 || '';
    line2Cell.appendChild(line2Text);

    const line3Cell = document.createElement('div');
    line3Cell.className = 'grid-cell';
    const line3Text = document.createElement('div');
    line3Text.className = 'auto-fit-right';
    line3Text.style.fontSize = item.line3Fs || '22px';
    line3Text.textContent = item.line3 || '';
    line3Cell.appendChild(line3Text);

    labelGrid.appendChild(vendorCell);
    labelGrid.appendChild(line1Cell);
    labelGrid.appendChild(line2Cell);
    labelGrid.appendChild(line3Cell);
    
    pageDiv.appendChild(labelGrid);
    return pageDiv;
}

function printSingle() {
    if (!batchPrintContainer) return;
    batchPrintContainer.innerHTML = '';

    const vendorText = getCleanText(previewVendor) || '廠商名稱';
    const item = {
        vendor: vendorText,
        line1: getCleanText(labelItem1),
        line2: getCleanText(document.getElementById('label-wrapper-2')),
        line3: getCleanText(labelItem3),
        vendorFs: autoFitLeft(previewVendor),
        line1Fs: autoFitRight(labelItem1),
        line2Fs: autoFitRight(document.getElementById('label-wrapper-2')),
        line3Fs: autoFitRight(labelItem3)
    };

    if (!item.line1 && !item.line2 && !item.line3) {
        alert('目前沒有可列印的標籤內容！');
        return;
    }

    const pageDiv = createPrintPage(item);
    batchPrintContainer.appendChild(pageDiv);
    document.title = vendorText;
    window.print();
}

function printBatch() {
    if (batchItems.length === 0) {
        alert('目前清單是空的！');
        return;
    }
    if (!batchPrintContainer) return;
    batchPrintContainer.innerHTML = '';

    batchItems.forEach(item => {
        const pageDiv = createPrintPage(item);
        batchPrintContainer.appendChild(pageDiv);
    });

    const vendorSet = new Set(batchItems.map(item => item.vendor));
    let printTitle = 'cm 標籤';
    if (vendorSet.size === 1) {
        printTitle = batchItems[0].vendor + '_批次標籤';
    } else {
        printTitle = '多廠商_批次標籤';
    }
    
    document.title = printTitle;
    window.print();
}

if (heightInput) heightInput.addEventListener('input', updateCalculations);
if (widthInput) widthInput.addEventListener('input', updateCalculations);

const printArea = document.getElementById('print-area');
if (printArea) {
    function updatePreviewScale() {
        const container = document.querySelector('.label-preview-container');
        const wrapper = document.querySelector('.preview-scale-wrapper');
        const printArea = document.getElementById('print-area');
        if (!container || !wrapper || !printArea) return;

        const baseWidth = printArea.offsetWidth;
        const baseHeight = printArea.offsetHeight;
        const availableWidth = Math.max(1, container.clientWidth - 8);
        const scale = Math.min(3, availableWidth / baseWidth);

        printArea.style.setProperty('--preview-scale', scale);
        wrapper.style.width = `${baseWidth * scale}px`;
        wrapper.style.height = `${baseHeight * scale}px`;
    }

    const resizeObserver = new ResizeObserver(() => {
        autoFitLeft(previewVendor);
        autoFitRight(labelItem1);
        autoFitRight(document.getElementById('label-wrapper-2'));
        autoFitRight(labelItem3);
    });
    resizeObserver.observe(printArea);
}

setTimeout(() => {
    if (printArea) updatePreviewScale();
    autoFitLeft(previewVendor);
    autoFitRight(labelItem1);
    autoFitRight(document.getElementById('label-wrapper-2'));
    autoFitRight(labelItem3);
}, 50);

window.addEventListener('afterprint', () => {
    if (batchPrintContainer) batchPrintContainer.innerHTML = '';
    document.title = 'cm 標籤';
});

document.addEventListener('wheel', function (event) {
    if (document.activeElement.type === 'number') {
        document.activeElement.blur();
    }
}, { passive: false });

// ====== URL 解析並自動生成下拉選單 ======
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const dataParam = urlParams.get('data');
    
    if (dataParam) {
        try {
            const parsedData = JSON.parse(decodeURIComponent(dataParam));
            const customerCode = parsedData.customer_code;
            const items = parsedData.items;

            const previewVendor = document.getElementById('preview-vendor');
            const heightInput = document.getElementById('height');
            const widthInput = document.getElementById('width');
            const labelItem2 = document.getElementById('label-item-2');
            const targetContainer = document.getElementById('select-container-2');

            if (customerCode && previewVendor) {
                const vendorMatch = vendorData.find(v => v.id.toUpperCase() === customerCode.toUpperCase());
                if (vendorMatch) {
                    previewVendor.innerText = vendorMatch.name;
                } else {
                    previewVendor.innerText = customerCode;
                }
                autoFitLeft(previewVendor);
            }

            if (items && items.length > 0) {
                items.forEach(item => {
                    if (item.height && item.width && heightInput && widthInput) {
                        heightInput.value = item.height;
                        widthInput.value = item.width;
                        
                        updateCalculations();
                        
                        // 清空與重設第二行
                        if (targetContainer) targetContainer.innerHTML = '';
                        if (labelItem2) labelItem2.innerText = '';
                        const tags2 = document.getElementById('label-tags-2');
                        if (tags2) tags2.textContent = '';

                        if (item.remarks) {
                            const parsed = parseAndSortRemarks(item.remarks);
                            
                            // 將過濾後符合的附件自動變成下拉選單 (只會產生於單一列)
                            if (parsed.midSelects.length > 0 && targetContainer) {
                                parsed.midSelects.forEach(val => {
                                    addSelect(2);
                                    const inputs = targetContainer.querySelectorAll('input');
                                    if(inputs.length > 0) inputs[inputs.length - 1].value = val;
                                });
                                updateLabelFromSelects(2);
                            }
                            
                            if (labelItem2 && parsed.midText) {
                                labelItem2.innerText = parsed.midText;
                            }
                            autoFitRight(document.getElementById('label-wrapper-2'));
                        }

                        const qty = parseInt(item.qty) || 1;
                        for (let i = 0; i < qty; i++) {
                            addToBatch();
                        }
                    }
                });
                window.history.replaceState({}, document.title, window.location.pathname);
            }
        } catch (error) {
            console.error("解析網址資料失敗:", error);
        }
    }
});