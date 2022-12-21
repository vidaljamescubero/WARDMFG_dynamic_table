
// function for dropdown
function dropdownScript(parentDom) {

    if (parentDom.querySelector('.dropdown-option') !== null) {
        const dropdownOption = parentDom.querySelectorAll('.dropdown-option')

        dropdownOption[0].classList.add('dropdown-selected')

        const dropdownContainer = parentDom.querySelector('.dropdown-select-container');
        const dropdownSelected = parentDom.querySelector('.dropdown-selected');
        const dropdownSelectedField = parentDom.querySelector('.select_trigger');

        dropdownSelectedField.innerHTML = dropdownSelected.innerHTML

        function dropdownWidthChange() {

            let containerWidth = dropdownSelectedField.offsetWidth + 50
            dropdownContainer.style.cssText = `width: ${containerWidth}px`
        }

        dropdownWidthChange()

        function dropdownOpen() {

            dropdownContainer.addEventListener('click', () => {

                if (dropdownContainer.classList.contains("select-open")) {
                    dropdownContainer.classList.remove("select-open")
                } else {
                    dropdownContainer.classList.add("select-open")
                }


            })

            for (let i = 0; i < dropdownOption.length; i++) {
                dropdownOption[i].addEventListener('click', () => {
                    dropdownSelectedField.innerHTML = dropdownOption[i].innerHTML

                    for (let x = 0; x < dropdownOption.length; x++) {
                        if (dropdownOption[x].classList.contains('dropdown-selected')) {
                            dropdownOption[x].classList.remove('dropdown-selected');
                        }
                    }

                    dropdownOption[i].classList.add('dropdown-selected')

                    dropdownWidthChange()
                })
            }

            window.addEventListener('click', (e) => {
                if (!dropdownContainer.contains(e.target)) {
                    dropdownContainer.classList.remove("select-open")
                }
            })

        }
        dropdownOpen()
    }
}

// function for icons 
function changeIcons(linkDom) {
    if (linkDom !== undefined) {
        const tableLinks = linkDom
        for (let i = 0; i < tableLinks.length; i++) {

            if (tableLinks[i].getAttribute('href') === "") {
                tableLinks[i].innerHTML = ""
            }

            let urlData = tableLinks[i].getAttribute('href')

            if (tableLinks[i].getAttribute('href').includes(".pdf")) {
                tableLinks[i].innerHTML = `<a class="tableLinks" href="${urlData}"><img src="https://custom.webact.com/wardMFGicons/pdf.png" alt="" style="width: auto; height: 25px"></a>`
            } else if (tableLinks[i].getAttribute('href').includes(".jpg")) {
                tableLinks[i].innerHTML = `<a class="tableLinks" href="${urlData}"><img src="https://custom.webact.com/wardMFGicons/jpg.png" alt="" style="width: auto; height: 25px"></a>`
            } else if (tableLinks[i].getAttribute('href').includes(".png")) {
                tableLinks[i].innerHTML = `<a class="tableLinks" href="${urlData}"><img src="https://custom.webact.com/wardMFGicons/png.png" alt="" style="width: auto; height: 25px"></a>`
            } else if (tableLinks[i].getAttribute('href').includes(".xls") || tableLinks[i].getAttribute('href').includes(".xlsx")) {
                tableLinks[i].innerHTML = `<a class="tableLinks" href="${urlData}"><img src="https://custom.webact.com/wardMFGicons/sheets.png" alt="" style="width: auto; height: 25px"></a>`
            } else if (tableLinks[i].getAttribute('href').includes(".zip")) {
                tableLinks[i].innerHTML = `<a class="tableLinks" href="${urlData}"><img src="https://custom.webact.com/wardMFGicons/zip.png" alt="" style="width: auto; height: 25px"></a>`
            } else if (tableLinks[i].getAttribute('href') === "") {
                tableLinks[i].innerHTML = ``
            } else {
                tableLinks[i].innerHTML = `<a class="tableLinks" href="${urlData}"><img src="https://custom.webact.com/wardMFGicons/download.png" alt="" style="width: auto; height: 25px"></a>`
            }

        }
    }
}

function paginationDisplay(containerDom) {
    setTimeout(() => {
        const paginationContainer = containerDom.querySelector('.gridjs-pages')
        if (paginationContainer.childNodes.length === 3) {
            paginationContainer.style.cssText = `display: none`
        } else {
            paginationContainer.style.cssText = ``
        }
    }, 500)

}

function translateDate(date) {
    let dateArray = date.split(" ").slice(-3)
    let checkDateMonth = dateArray[0].split('')
    let dateMonth

    if (checkDateMonth[0] === '0' || checkDateMonth[0] === '1' || checkDateMonth[0] === '2' || checkDateMonth[0] === '3' || checkDateMonth[0] === '4' || checkDateMonth[0] === '5' || checkDateMonth[0] === '6' || checkDateMonth[0] === '7' || checkDateMonth[0] === '8' || checkDateMonth[0] === '9') {
        dateMonth = checkDateMonth.splice(4).join('')
    } else {
        dateMonth = checkDateMonth.join('')
    }

    let translateDateMonth = dateMonth

    if (languageToUse === "es") {
        switch (dateMonth) {
            case "January":
                translateDateMonth = "enero"
                break

            case "February":
                translateDateMonth = "Febrero"
                break

            case "March":
                translateDateMonth = "Marzo"
                break

            case "April":
                translateDateMonth = "Abril"
                break

            case "May":
                translateDateMonth = "Mayo"
                break

            case "June":
                translateDateMonth = "Junio"
                break

            case "July":
                translateDateMonth = "Julio"
                break

            case "August":
                translateDateMonth = "Agosto"
                break

            case "September":
                translateDateMonth = "Septiembre"
                break

            case "October":
                translateDateMonth = "Octubre"
                break

            case "November":
                translateDateMonth = "Noviembre"
                break

            case "December":
                December = "Diciembre"
                break
        }
    }

    if (languageToUse === "fr") {
        switch (dateMonth) {
            case "January":
                translateDateMonth = "Janvier"
                break

            case "February":
                translateDateMonth = "Février"
                break

            case "March":
                translateDateMonth = "Mars"
                break

            case "April":
                translateDateMonth = "Avril"
                break

            case "May":
                translateDateMonth = "Peut"
                break

            case "June":
                translateDateMonth = "Juin"
                break

            case "July":
                translateDateMonth = "Juillet"
                break

            case "August":
                translateDateMonth = "Août"
                break

            case "September":
                translateDateMonth = "Septembre"
                break

            case "October":
                translateDateMonth = "Octobre"
                break

            case "November":
                translateDateMonth = "Novembre"
                break

            case "December":
                December = "Décembre"
                break
        }
    }

    dateArray[0] = translateDateMonth
    let translatedDateValue = dateArray.join(" ")

    return translatedDateValue
}

function searchButtonIcon() {
    const inputField = document.querySelectorAll('.gridjs-search-input')
    for (let i = 0; i < inputField.length; i++) {
        inputField[i].addEventListener('keyup', () => {
            changeIcons(document.querySelectorAll(".tableLinks"));
            setTimeout(() => {
                changeIcons(document.querySelectorAll(".tableLinks"));
            }, 500)
        })
        inputField[i].addEventListener('keydown', () => {
            changeIcons(document.querySelectorAll(".tableLinks"));
            setTimeout(() => {
                changeIcons(document.querySelectorAll(".tableLinks"));
            }, 500)
        })
        inputField[i].addEventListener('click', () => {
            changeIcons(document.querySelectorAll(".tableLinks"));
            setTimeout(() => {
                changeIcons(document.querySelectorAll(".tableLinks"));
            }, 500)
        })
    }
}

function translateDate1() {
    if (languageToUse !== 'en') {
        const dateLangTd = document.querySelectorAll('td')

        for (let i = 0; i < dateLangTd.length; i++) {
            if (dateLangTd[i].getAttribute("data-column-id") === "effectiveDate") {
                dateLangTd[i].style.cssText = "opacity: 0"
            }
        }
        for (let i = 0; i < dateLangTd.length; i++) {
            if (dateLangTd[i].getAttribute("data-column-id") === "effectiveDate") {
                let dateValue = dateLangTd[i].innerHTML

                dateLangTd[i].innerHTML = ''

                dateLangTd[i].innerHTML = translateDate(dateValue)

                setTimeout(() => {
                    dateLangTd[i].innerHTML = translateDate(dateValue)
                    dateLangTd[i].style.cssText = "opacity: 1"
                }, 500)


            }
        }
    }
}

function paginationButtonLanguage() {
    const AllButton = document.querySelectorAll('button')
    const AllInput = document.querySelectorAll(".gridjs-search-input")
    setTimeout(() => {
        for (let i = 0; i < AllButton.length; i++) {

            if (AllButton[i].getAttribute("title") === "Next") {
                if (languageToUse === "es") {
                    AllButton[i].innerHTML = "Próximo"
                } else if (languageToUse === "fr") {
                    AllButton[i].innerHTML = "Prochain"
                }
            } else if (AllButton[i].getAttribute("title") === "Previous") {
                if (languageToUse === "es") {
                    AllButton[i].innerHTML = "Previo"
                } else if (languageToUse === "fr") {
                    AllButton[i].innerHTML = "Précédent"
                }
            }
        }

        for (let i = 0; i < AllInput.length; i++) {
            if (languageToUse === "es") {
                AllInput[i].setAttribute("placeholder", "Escribe una palabra clave...")
            } else if (languageToUse === "fr") {
                AllInput[i].setAttribute("placeholder", "Tapez un mot-clé...")
            }
        }

    }, 300)
}



const dudaContainer = document.querySelector(".duda-container")

const priceSheetTable = document.querySelector(".priceSheetTable")
const priceSheetSort = document.querySelector(".priceSheetSort")

const tableNameDom = priceSheetTable.querySelector(".select_trigger");
const tableNameDomOptions = priceSheetTable.querySelector(".dropdown-option-container");
const tableWrapper = document.querySelector(".currentPriceSheetWrapper");
const tableContainer = document.querySelector('.tableContainer');


const LndDContainer = document.querySelector('.LndDContainer')

const tablesPriceHist = document.querySelector(".tablesPriceHist");
const sortPriceHist = document.querySelector(".sortPriceHist");

const tableHistNameDom = tablesPriceHist.querySelector(".select_trigger");
const tableHistNameDomOptions = tablesPriceHist.querySelector(".dropdown-option-container");
const tableWrapperHist = document.querySelector(".currentPriceSheetWrapperHist");
const tableHistContainer = document.querySelector(".tableContainerHist");


let priceSheetData = [
    {
        tableName: "WARDFlex/WARDFlexMAX",
        data: wardflex
    },
    {
        tableName: "Pipe Fittings",
        data: pipeFittings
    },
    {
        tableName: "Pipe Nipples",
        data: pipeNipples
    }
]

let priceSheetColumns = [{
    id: "documents",
    name: "Document Name",
    width: "35%",
    sort: {
        enabled: true
    }
}, {
    id: "priceSheet",
    name: "Price Sheet",
    width: "11%",
    formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
    <span class="sr-only">Loading...</span>
  </div></a>`)
}, {
    id: "interactive",
    name: "Interactive",
    width: "11%",
    formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
    <span class="sr-only">Loading...</span>
  </div></a>`)
},
{
    id: "productMaster",
    name: "Product Master",
    width: "11%",
    formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
    <span class="sr-only">Loading...</span>
  </div></a>`)
}, {
    id: "effectiveDate",
    name: "Effective Date",
    width: "10%",
    sort: {
        compare: (a, b) => {
            if (new Date(a) > new Date(b)) {
                return 1;
            } else if (new Date(b) > new Date(a)) {
                return -1;
            } else {
                return 0;
            }
        }
    }
}, {
    id: "historicalSheet",
    name: "Historical Sheet",
    width: "11%",
    formatter: (cell) => gridjs.html(`<a target="_self" class="vHArr" href="${cell}" style="display: flex; align-items: center; justify-content: center; text-decoration: none;">View History<i class="fa-solid fa-arrow-right" style="transform: rotate(315deg); margin-left: 2px"></i></a>`)
}
]

let lnDColumns = [
    {
        id: "documentName",
        name: "Document Name",
        width: "60%",
        sort: {
            enabled: true
        }
    }, {
        id: "file",
        name: "File",
        width: "20%",
        formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
        <span class="sr-only">Loading...</span>
      </div></a>`)
    }, {
        id: "effectiveDate",
        name: "Effective Date",
        width: "20%",
        sort: {
            compare: (a, b) => {
                if (new Date(a) > new Date(b)) {
                    return 1;
                } else if (new Date(b) > new Date(a)) {
                    return -1;
                } else {
                    return 0;
                }
            }
        }
    }
]

let priceSheetDataHist = [
    {
        tableName: "WARDFlex/WARDFlexMAX",
        data: wardflexHist
    },
    {
        tableName: "Pipe Fittings",
        data: pipeFittingsHist
    },
    {
        tableName: "Pipe Nipples",
        data: pipeNipplesHist
    }
]

let priceSheetColumnsHist = [{
    id: "documents",
    name: "Document Name",
    width: "35%",
    sort: {
        enabled: true
    }
}, {
    id: "priceSheet",
    name: "Price Sheet",
    width: "11%",
    formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
    <span class="sr-only">Loading...</span>
  </div></a>`)
}, {
    id: "interactive",
    name: "Interactive",
    width: "11%",
    formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
    <span class="sr-only">Loading...</span>
  </div></a>`)
},
{
    id: "productMaster",
    name: "Product Master",
    width: "11%",
    formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
    <span class="sr-only">Loading...</span>
  </div></a>`)
}, {
    id: "effectiveDate",
    name: "Effective Date",
    width: "10%",
    sort: {
        compare: (a, b) => {
            if (new Date(a) > new Date(b)) {
                return 1;
            } else if (new Date(b) > new Date(a)) {
                return -1;
            } else {
                return 0;
            }
        }
    }
},
]

const breadcrumbNavLang = document.querySelector('.breadcrumb-nav');
const detailsTextSearch = document.querySelectorAll('.detailsText');

switch (languageToUse) {
    case "en":
        priceSheetColumns = [{
            id: "documents",
            name: "Document name",
            width: "35%",
            sort: {
                enabled: true
            }
        }, {
            id: "priceSheet",
            name: "Price Sheet",
            width: "11%",
            formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div></a>`)
        }, {
            id: "interactive",
            name: "Interactive",
            width: "11%",
            formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div></a>`)
        },
        {
            id: "productMaster",
            name: "Product Master",
            width: "11%",
            formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div></a>`)
        }, {
            id: "effectiveDate",
            name: "Effective Date",
            width: "10%",
            sort: {
                compare: (a, b) => {
                    if (new Date(a) > new Date(b)) {
                        return 1;
                    } else if (new Date(b) > new Date(a)) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
            }
        }, {
            id: "historicalSheet",
            name: "Historical Sheet",
            width: "11%",
            formatter: (cell) => gridjs.html(`<a target="_self" class="vHArr" href="${cell}" style="display: flex; align-items: center; justify-content: center; text-decoration: none;">View History<i class="fa-solid fa-arrow-right" style="transform: rotate(315deg); margin-left: 2px"></i></a>`)
        },
        ]

        lnDColumns = [
            {
                id: "documentName",
                name: "Document Name",
                width: "60%",
                sort: {
                    enabled: true
                }
            }, {
                id: "file",
                name: "File",
                width: "20%",
                formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
                <span class="sr-only">Loading...</span>
              </div></a>`)
            }, {
                id: "effectiveDate",
                name: "Effective Date",
                width: "20%",
                sort: {
                    compare: (a, b) => {
                        if (new Date(a) > new Date(b)) {
                            return 1;
                        } else if (new Date(b) > new Date(a)) {
                            return -1;
                        } else {
                            return 0;
                        }
                    }
                }
            }
        ]

        priceSheetColumnsHist = [{
            id: "documents",
            name: "Document Name",
            width: "35%",
            sort: {
                enabled: true
            }
        }, {
            id: "priceSheet",
            name: "Price Sheet",
            width: "11%",
            formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div></a>`)
        }, {
            id: "interactive",
            name: "Interactive",
            width: "11%",
            formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div></a>`)
        },
        {
            id: "productMaster",
            name: "Product Master",
            width: "11%",
            formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div></a>`)
        }, {
            id: "effectiveDate",
            name: "Effective Date",
            width: "10%",
            sort: {
                compare: (a, b) => {
                    if (new Date(a) > new Date(b)) {
                        return 1;
                    } else if (new Date(b) > new Date(a)) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
            }
        },
        ]

        break;

    case "es":
        priceSheetColumns = [{
            id: "documents",
            name: "nombre del documento",
            width: "35%",
            sort: {
                enabled: true
            }
        }, {
            id: "priceSheet",
            name: "Hoja de precios",
            width: "11%",
            formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div></a>`)
        }, {
            id: "interactive",
            name: "Interactivo",
            width: "11%",
            formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div></a>`)
        },
        {
            id: "productMaster",
            name: "maestro del producto",
            width: "11%",
            formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div></a>`)
        }, {
            id: "effectiveDate",
            name: "Fecha efectiva",
            width: "10%",
            sort: {
                compare: (a, b) => {
                    if (new Date(a) > new Date(b)) {
                        return 1;
                    } else if (new Date(b) > new Date(a)) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
            }
        }, {
            id: "historicalSheet",
            name: "Ficha Histórica",
            width: "11%",
            formatter: (cell) => gridjs.html(`<a target="_self" class="vHArr" href="${cell}" style="display: flex; align-items: center; justify-content: center; text-decoration: none;">Ver historial<i class="fa-solid fa-arrow-right" style="transform: rotate(315deg); margin-left: 2px"></i></a>`)
        },
        ]

        lnDColumns = [
            {
                id: "documentName",
                name: "nombre del documento",
                width: "60%",
                sort: {
                    enabled: true
                }
            }, {
                id: "file",
                name: "Expediente",
                width: "20%",
                formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
                <span class="sr-only">Loading...</span>
              </div></a>`)
            }, {
                id: "effectiveDate",
                name: "Fecha efectiva",
                width: "20%",
                sort: {
                    compare: (a, b) => {
                        if (new Date(a) > new Date(b)) {
                            return 1;
                        } else if (new Date(b) > new Date(a)) {
                            return -1;
                        } else {
                            return 0;
                        }
                    }
                }
            }
        ]

        priceSheetColumnsHist = [{
            id: "documents",
            name: "nombre del documento",
            width: "35%",
            sort: {
                enabled: true
            }
        }, {
            id: "priceSheet",
            name: "Hoja de precios",
            width: "11%",
            formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div></a>`)
        }, {
            id: "interactive",
            name: "Interactivo",
            width: "11%",
            formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div></a>`)
        },
        {
            id: "productMaster",
            name: "maestro del producto",
            width: "11%",
            formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div></a>`)
        }, {
            id: "effectiveDate",
            name: "Fecha efectiva",
            width: "10%",
            sort: {
                compare: (a, b) => {
                    if (new Date(a) > new Date(b)) {
                        return 1;
                    } else if (new Date(b) > new Date(a)) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
            }
        },
        ]

        breadcrumbNavLang.innerHTML = ` <a class="histBackButton" href="">literatura</a> > histórico`
        detailsTextSearch.forEach((item, index) => {
            if (detailsTextSearch[index].innerHTML.trim() === "Search for:") {
                detailsTextSearch[index].innerHTML = "Buscar:"
            } else if (detailsTextSearch[index].innerHTML.trim() === "Subcategories:") {
                detailsTextSearch[index].innerHTML = "Subcategorías:"
            } else if (detailsTextSearch[index].innerHTML.trim() === "Table:") {
                detailsTextSearch[index].innerHTML = "Mesa:"
            }
        })

        break;

    case "fr":
        priceSheetColumns = [{
            id: "documents",
            name: "Nom du document",
            width: "35%",
            sort: {
                enabled: true
            }
        }, {
            id: "priceSheet",
            name: "Feuille de prix",
            width: "11%",
            formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div></a>`)
        }, {
            id: "interactive",
            name: "Interactif",
            width: "11%",
            formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div></a>`)
        },
        {
            id: "productMaster",
            name: "Maître de produit",
            width: "11%",
            formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div></a>`)
        }, {
            id: "effectiveDate",
            name: "Date effective",
            width: "10%",
            sort: {
                compare: (a, b) => {
                    if (new Date(a) > new Date(b)) {
                        return 1;
                    } else if (new Date(b) > new Date(a)) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
            }
        }, {
            id: "historicalSheet",
            name: "Fiche historique",
            width: "11%",
            formatter: (cell) => gridjs.html(`<a target="_self" class="vHArr" href="${cell}" style="display: flex; align-items: center; justify-content: center; text-decoration: none;">voir l'historique<i class="fa-solid fa-arrow-right" style="transform: rotate(315deg); margin-left: 2px"></i></a>`)
        },
        ]

        lnDColumns = [
            {
                id: "documentName",
                name: "Nom du document",
                width: "60%",
                sort: {
                    enabled: true
                }
            }, {
                id: "file",
                name: "Dossier",
                width: "20%",
                formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
                <span class="sr-only">Loading...</span>
              </div></a>`)
            }, {
                id: "effectiveDate",
                name: "Date effective",
                width: "20%",
                sort: {
                    compare: (a, b) => {
                        if (new Date(a) > new Date(b)) {
                            return 1;
                        } else if (new Date(b) > new Date(a)) {
                            return -1;
                        } else {
                            return 0;
                        }
                    }
                }
            }
        ]

        priceSheetColumnsHist = [{
            id: "documents",
            name: "Nom du document",
            width: "35%",
            sort: {
                enabled: true
            }
        }, {
            id: "priceSheet",
            name: "Feuille de prix",
            width: "11%",
            formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div></a>`)
        }, {
            id: "interactive",
            name: "Interactif",
            width: "11%",
            formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div></a>`)
        },
        {
            id: "productMaster",
            name: "Maître de produit",
            width: "11%",
            formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div></a>`)
        }, {
            id: "effectiveDate",
            name: "Date effective",
            width: "10%",
            sort: {
                compare: (a, b) => {
                    if (new Date(a) > new Date(b)) {
                        return 1;
                    } else if (new Date(b) > new Date(a)) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
            }
        },
        ]

        breadcrumbNavLang.innerHTML = ` <a class="histBackButton" href="">Littérature</a> > historique`
        detailsTextSearch.forEach((item, index) => {
            if (detailsTextSearch[index].innerHTML.trim() === "Search for:") {
                detailsTextSearch[index].innerHTML = "Rechercher:"
            } else if (detailsTextSearch[index].innerHTML.trim() === "Subcategories:") {
                detailsTextSearch[index].innerHTML = "Sous-catégories:"
            } else if (detailsTextSearch[index].innerHTML.trim() === "Table:") {
                detailsTextSearch[index].innerHTML = "Table:"
            }
        })

}

function allAddTableFunction(ColumnData, tableWrapperDom, tableData, tableNameDomFuncOptions, tableNameDomFunc, tableDropdownDom) {
    let dataTableGrid

    function addTablePrice(dataTable) {

        let currentSortSettingData = dataTable

        if (languageToUse === 'es') {
            dataTableGrid = new gridjs.Grid({
                columns: ColumnData,
                data: () => currentSortSettingData,
                search: {
                    enabled: true
                },
                style: {
                    table: {
                        "width": "100%"
                    }
                },
                pagination: {
                    enabled: true,
                    limit: 6,
                    summary: false
                },
                language: {
                    'search': {
                        'placeholder': 'Escribe una palabra clave...'
                    },
                    'pagination': {
                        'previous': 'Previo',
                        'next': 'Próximo'
                    }
                }
            }).render(tableWrapperDom);
        } else if (languageToUse === 'fr') {
            dataTableGrid = new gridjs.Grid({
                columns: ColumnData,
                data: () => currentSortSettingData,
                search: {
                    enabled: true
                },
                style: {
                    table: {
                        "width": "100%"
                    }
                },
                pagination: {
                    enabled: true,
                    limit: 6,
                    summary: false
                },
                language: {
                    'search': {
                        'placeholder': 'Tapez un mot-clé...'
                    },
                    'pagination': {
                        'previous': 'Précédent',
                        'next': 'Prochain'
                    }
                }
            }).render(tableWrapperDom);
        } else {
            dataTableGrid = new gridjs.Grid({
                columns: ColumnData,
                data: () => currentSortSettingData,
                search: {
                    enabled: true
                },
                style: {
                    table: {
                        "width": "100%"
                    }
                },
                pagination: {
                    enabled: true,
                    limit: 6,
                    summary: false
                }
            }).render(tableWrapperDom);
        }

        setTimeout(() => {
            changeIcons(document.querySelectorAll(".tableLinks"));
            translateDate1()
        }, 200)

    }

    function changeTablePrice(dataTable) {

        let currentSortSettingData = dataTable

        dataTableGrid.updateConfig({
            data: currentSortSettingData
        }).forceRender()


        setTimeout(() => {
            changeIcons(document.querySelectorAll(".tableLinks"));
            translateDate1()
        }, 200)

        translateDate1()

    }

    function addTableName() {
        let tableListArray = []

        for (let i = 0; i < tableData.length; i++) {
            if (tableListArray.includes(tableData[i].tableName)) {

            } else {
                tableListArray.push(tableData[i].tableName)
                tableNameDomFuncOptions.innerHTML += `<div class="dropdown-option">${tableData[i].tableName}</div>`
            }
        }

        dropdownScript(tableDropdownDom)

        let selectedTable = tableNameDomFunc.innerHTML
        let selectedTableData

        for (let x = 0; x < tableData.length; x++) {
            if (tableData[x].tableName === selectedTable) {
                selectedTableData = tableData[x].data
            }
        }

        addTablePrice(selectedTableData)
    }

    addTableName()

    tableNameDomFuncOptions.addEventListener("click", () => {

        let selectedTable = tableNameDomFunc.innerHTML
        let selectedTableData

        for (let x = 0; x < tableData.length; x++) {
            if (tableData[x].tableName === selectedTable) {
                selectedTableData = tableData[x].data
            }
        }

        tableWrapperDom.innerHTML = ""
        changeTablePrice(selectedTableData)
        paginationDisplay(tableWrapperDom)
        translateDate1()
        paginationButtonLanguage()
    });

    changeIcons(document.querySelectorAll(".tableLinks"))
    paginationDisplay(tableWrapperDom)
    translateDate1()

    tableWrapperDom.addEventListener('click', () => {
        setTimeout(() => {
            changeIcons(document.querySelectorAll(".tableLinks"))
            paginationDisplay(tableWrapperDom)
            translateDate1()
            paginationButtonLanguage()
        }, 300)
    })

    searchButtonIcon()
    paginationButtonLanguage()

    let tableHead = document.querySelectorAll('.gridjs-th-sort')

    for (let i = 0; i < tableHead.length; i++) {
        tableHead[i].addEventListener('click', () => {
            setTimeout(() => {
                changeIcons(document.querySelectorAll(".tableLinks"))
            }, 300)
            translateDate1()
            paginationButtonLanguage()
        })
    }

    if (tableToDisplay === "historyPriceSh") {
        let urlString = window.location.search
        const urlParams = new URLSearchParams(urlString);
        const urlTableName = urlParams.get('tableName');
        const urlBack = urlParams.get('backUrl')

        if (urlTableName !== null) {
            let tableNameList = tableNameDomFuncOptions.querySelectorAll('.dropdown-option')
            for (let i = 0; i < tableNameList.length; i++) {

                if (tableNameList[i].innerHTML === urlTableName) {
                    tableNameList[i].click()
                    setTimeout(() => {
                        tableWrapperDom.click()
                    }, 300)
                }
            }
        }

        if (urlBack !== null) {
            document.querySelector('.histBackButton').setAttribute('href', `${urlBack}`)
        }

    }

}

if (tableToDisplay === "priceSh") {
    allAddTableFunction(priceSheetColumns, tableWrapper, priceSheetData, tableNameDomOptions, tableNameDom, priceSheetTable)

    document.querySelector(".tableContainer").style.cssText = "display: block"
    document.querySelector(".LndDContainer").style.cssText = "display: none"
    document.querySelector(".tableContainerHist").style.cssText = "display: none"

}


if (tableToDisplay === "litNDown") {
    document.querySelector(".tableContainer").style.cssText = "display: none"
    document.querySelector(".LndDContainer").style.cssText = "display: block"
    document.querySelector(".tableContainerHist").style.cssText = "display: none"
    subCategoryList = []
    dataToUse = []

    litSheetList.forEach((value, index) => {
        if (!subCategoryList.includes(litSheetList[index].wpsLitSubcateName)) {
            subCategoryList.push(litSheetList[index].wpsLitSubcateName)

            dataToUse.push({
                subcategoryName: litSheetList[index].wpsLitSubcateName,
                data: []
            })
        }
    })

    for (let i = 0; i < dataToUse.length; i++) {
        let tableList = []

        for (let x = 0; x < litSheetList.length; x++) {
            if (dataToUse[i].subcategoryName === litSheetList[x].wpsLitSubcateName) {
                if (!tableList.includes(litSheetList[x].wpsLitTableName)) {
                    tableList.push(litSheetList[x].wpsLitTableName)
                    dataToUse[i].data.push({
                        data: [],
                        tableName: litSheetList[x].wpsLitTableName
                    })
                }
            }
        }

    }

    dataToUse.forEach((item, index) => {
        dataToUse[index].data.forEach((item, indexList) => {
            for (let i = 0; i < litSheetList.length; i++) {
                if (dataToUse[index].data[indexList].tableName === litSheetList[i].wpsLitTableName && dataToUse[index].subcategoryName === litSheetList[i].wpsLitSubcateName) {

                    dataToUse[index].data[indexList].data.push([
                        litSheetList[i].wpsLitDocName,
                        litSheetList[i].wpsLitFile,
                        new Date(litSheetList[i].wpsLitEff).toLocaleDateString('default', { month: 'long', year: 'numeric', day: 'numeric' })
                        // })
                    ])
                }
            }
        })
    })


    function LnDTableFunction(containerDom) {
        let tableDropdown = containerDom.querySelector('.LnDTable')



        let dataTableGrid

        function tableToChoose() {

            tableDropdown.innerHTML =
                `
                <div class="dropdown-select-container">
                    <div class="dropdown-select">
                        <div class="select_trigger">

                        </div>

                        <div class="dropdown-arrow">

                        </div>
                    </div>

                    <div class="dropdown-option-container">

                    </div>
                </div>
            `

            let selectedSubcategory = litsubCategory


            tableDropdown.querySelector('.dropdown-option-container').innerHTML = ``

            dataToUse.forEach((val, index) => {
                if (dataToUse[index].subcategoryName === selectedSubcategory) {
                    dataToUse[index].data.forEach((item, indexList) => {
                        tableDropdown.querySelector('.dropdown-option-container').innerHTML += `<div class="dropdown-option">${dataToUse[index].data[indexList].tableName}</div>`
                    })
                }
            })

            dropdownScript(tableDropdown)

            function addTable() {
                let dataTableToUse = []
                let currenTable = tableDropdown.querySelector('.select_trigger').firstChild.data
                dataToUse.forEach((value, index) => {
                    if (dataToUse[index].subcategoryName === litsubCategory) {
                        dataToUse[index].data.forEach((value, indexList) => {
                            if (dataToUse[index].data[indexList].tableName === currenTable) {
                                dataTableToUse = dataToUse[index].data[indexList].data
                            }
                        })
                    }
                })

                if (languageToUse === 'es') {
                    dataTableGrid = new gridjs.Grid({
                        columns: lnDColumns,
                        data: () => dataTableToUse,
                        search: {
                            enabled: true
                        },
                        style: {
                            table: {
                                "width": "100%"
                            }
                        },
                        pagination: {
                            enabled: true,
                            limit: 6,
                            summary: false
                        },
                        language: {
                            'search': {
                                'placeholder': 'Escribe una palabra clave...'
                            },
                            'pagination': {
                                'previous': 'Previo',
                                'next': 'Próximo'
                            }
                        }
                    }).render(containerDom.querySelector('.LnDWrapper'));
                } else if ((languageToUse === 'fr')) {
                    dataTableGrid = new gridjs.Grid({
                        columns: lnDColumns,
                        data: () => dataTableToUse,
                        search: {
                            enabled: true
                        },
                        style: {
                            table: {
                                "width": "100%"
                            }
                        },
                        pagination: {
                            enabled: true,
                            limit: 6,
                            summary: false
                        },
                        language: {
                            'search': {
                                'placeholder': 'Tapez un mot-clé...'
                            },
                            'pagination': {
                                'previous': 'Précédent',
                                'next': 'Prochain'
                            }
                        }
                    }).render(containerDom.querySelector('.LnDWrapper'));
                } else {
                    dataTableGrid = new gridjs.Grid({
                        columns: lnDColumns,
                        data: () => dataTableToUse,
                        search: {
                            enabled: true
                        },
                        style: {
                            table: {
                                "width": "100%"
                            }
                        },
                        pagination: {
                            enabled: true,
                            limit: 6,
                            summary: false
                        }
                    }).render(containerDom.querySelector('.LnDWrapper'));
                }


                dataTableGrid.updateConfig({
                    data: dataTableToUse
                }).forceRender()

                setTimeout(() => {
                    changeIcons(document.querySelectorAll('.tableLinks'))
                    translateDate1()
                }, 200)

                paginationDisplay(containerDom.querySelector('.LnDWrapper'))
                translateDate1()
                paginationButtonLanguage()
            }

            function changeTable() {
                containerDom.querySelector('.LnDWrapper').innerHTML = ''
                let dataTableToUse = []
                let currenTable = tableDropdown.querySelector('.select_trigger').firstChild.data

                for (let i = 0; i < dataToUse.length; i++) {
                }

                dataToUse.forEach((value, index) => {
                    if (dataToUse[index].subcategoryName === selectedSubcategory) {
                        dataToUse[index].data.forEach((value, indexList) => {
                            if (dataToUse[index].data[indexList].tableName === currenTable) {
                                dataTableToUse = dataToUse[index].data[indexList].data
                            }
                        })
                    }
                })

                dataTableGrid.updateConfig({
                    data: dataTableToUse
                }).forceRender()

                setTimeout(() => {
                    changeIcons(document.querySelectorAll('.tableLinks'))
                    translateDate1()
                }, 200)

                paginationDisplay(containerDom.querySelector('.LnDWrapper'))
                translateDate1()
                paginationButtonLanguage()
            }

            addTable()

            tableDropdown.querySelector('.dropdown-option-container').addEventListener('click', () => {
                containerDom.querySelector('.LnDWrapper').innerHTML = ''
                changeTable()
            })

            let tableWrapperDom = document.querySelector('.LndDContainer')
            tableWrapperDom.addEventListener('click', () => {
                setTimeout(() => {
                    changeIcons(document.querySelectorAll(".tableLinks"))
                    paginationDisplay(tableWrapperDom)
                    translateDate1()
                    paginationButtonLanguage()
                }, 300)
            })


        }

        tableToChoose()

    }

    LnDTableFunction(LndDContainer)
}

if (tableToDisplay === "historyPriceSh") {
    allAddTableFunction(priceSheetColumnsHist, tableWrapperHist, priceSheetDataHist, tableHistNameDomOptions, tableHistNameDom, tablesPriceHist)

    document.querySelector(".tableContainer").style.cssText = "display: none"
    document.querySelector(".LndDContainer").style.cssText = "display: none"
    document.querySelector(".tableContainerHist").style.cssText = "display: block"
}

paginationButtonLanguage()



// let histBackButton = document.querySelector('.histBackButton')


// function checkUrlViewHist(string) {
//     let currentURL = window.location.href
//     if (string[0] === "/") {
//         let urlArr = currentURL.split('/');
//         urlArr.pop()

//         let pathname = string.slice(1)
//         urlArr.push(pathname)
//         let urlToSend = urlArr.join('/')
//         return urlToSend
//     } else {
//         return string
//     }
// }

if (chooseSortTable === 'month') {
    let tableHead = document.querySelectorAll('.gridjs-th-sort')
    if (coosetMonthSort === 'asc') {
        tableHead.forEach((v, i, a) => {
            if (a[i].getAttribute('data-column-id') === "effectiveDate") {
                a[i].click()

                translateDate1()
                setTimeout(() => {
                    changeIcons(document.querySelectorAll(".tableLinks"))
                    translateDate1()
                }, 200)
                paginationButtonLanguage()
            }
        })
    } else if (coosetMonthSort === 'desc') {
        tableHead.forEach((v, i, a) => {
            if (a[i].getAttribute('data-column-id') === "effectiveDate") {
                a[i].click()

                setTimeout(() => {
                    a[i].click()

                    translateDate1()
                    setTimeout(() => {
                        changeIcons(document.querySelectorAll(".tableLinks"))
                        translateDate1()
                    }, 200)
                    paginationButtonLanguage()
                }, 500)
            }
        })
    }
} else if (chooseSortTable === 'name') {
    let tableHead = document.querySelectorAll('.gridjs-th-sort')
    if (chooseNameSort === 'asc') {
        tableHead.forEach((v, i, a) => {
            if (a[i].getAttribute('data-column-id') === "documents" || a[i].getAttribute('data-column-id') === "documentName") {
                a[i].click()

                translateDate1()
                setTimeout(() => {
                    changeIcons(document.querySelectorAll(".tableLinks"))
                    translateDate1()
                }, 200)
                paginationButtonLanguage()
            }
        })
    } else if (chooseNameSort === 'desc') {
        tableHead.forEach((v, i, a) => {
            if (a[i].getAttribute('data-column-id') === "documents" || a[i].getAttribute('data-column-id') === "documentName") {
                a[i].click()

                setTimeout(() => {
                    a[i].click()
                    translateDate1()
                    setTimeout(() => {
                        changeIcons(document.querySelectorAll(".tableLinks"))
                        translateDate1()
                    }, 200)
                    paginationButtonLanguage()
                }, 500)
            }
        })
    }
}

dudaContainer.addEventListener('click', () => {
    paginationButtonLanguage()
    searchButtonIcon()

    let tableHead = document.querySelectorAll('.gridjs-th-sort')

    for (let i = 0; i < tableHead.length; i++) {
        tableHead[i].addEventListener('click', () => {
            translateDate1()
            setTimeout(() => {
                changeIcons(document.querySelectorAll(".tableLinks"))
                translateDate1()
            }, 200)
            paginationButtonLanguage()
        })
    }
});

let tableHead = document.querySelectorAll('.gridjs-th-sort')

for (let i = 0; i < tableHead.length; i++) {
    tableHead[i].addEventListener('click', () => {
        translateDate1()
        setTimeout(() => {
            changeIcons(document.querySelectorAll(".tableLinks"))
            translateDate1()
        }, 200)
        paginationButtonLanguage()
    })
}

