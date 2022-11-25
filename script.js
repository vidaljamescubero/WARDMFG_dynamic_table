const tableNameDom = document.querySelector("#tablesPrice");
const tableSortDom = document.querySelector("#sortPrice");
const tableWrapper = document.querySelector(".currentPriceSheetWrapper")

const tableNameDomHist = document.querySelector("#tablesPriceHist");
const tableSortDomHist = document.querySelector("#sortPriceHist");
const tableWrapperHist = document.querySelector(".currentPriceSheetWrapperHist")

const lndNameDom = document.querySelector("#tablesLnD");
const lndSortDom = document.querySelector("#sortLnD");
const lndWrapper = document.querySelector(".LnDWrapper")

const lndContainer = document.querySelector(".LndDContainer")
const tableHistContainer = document.querySelector(".tableContainerHist")


let wardflex = [
    [
        "WARDFlex/WARDFlexMAX 310222_rev2",
        "https://www.wardmfg.com/wp-content/uploads/WardFlex_PriceSheet-310222_rev2.pdf",
        "", 'https://www.wardmfg.com/wp-content/uploads/310222-Product-Master.xls',
        "February 14, 2022",
        "https://www.wardmfg.com/historical-pricing/?title=WARDFlex%2FWARDFlexMAX"
    ]
]

let pipeFittings = [
    [
        "Malleable Iron & Cast Iron Pipe Fittings 300522_rev3",
        "https://www.wardmfg.com/wp-content/uploads/Ward_DomesticFittings_Price-Sheet_300522_CASTIRON-MALLEABLE_rev3.pdf",
        "https://www.wardmfg.com/wp-content/uploads/300522-Rev.-2-Interactive.xlsx",
        'https://www.wardmfg.com/wp-content/uploads/300522-Rev.-2-Product-Master.xlsx',
        "May 2, 2022",
        "https://www.wardmfg.com/historical-pricing/?title=Pipe+Fittings"
    ],
    [
        "International Malleable Iron Pipe Fittings & Unions 100522_rev1",
        "https://www.wardmfg.com/wp-content/uploads/Intl-Pipe-Fittings-Unions-PriceSheet_100522_rev1.pdf",
        "https://www.wardmfg.com/wp-content/uploads/100522-Interactive.xlsx",
        'https://www.wardmfg.com/wp-content/uploads/100522-Product-Master.xlsx',
        "May 31, 2022",
        "https://www.wardmfg.com/historical-pricing/?title=International+Pipe+Fittings&class="
    ],
]

let pipeNipples = [
    [
        "Seamless Steel Pipe Nipples 610522_rev1",
        "https://www.wardmfg.com/wp-content/uploads/Seamless-Pipe-Nipples-List-Price-Sheet-610522_rev1.pdf",
        "https://www.wardmfg.com/wp-content/uploads/610522-Interactive-.xlsx",
        'https://www.wardmfg.com/wp-content/uploads/610522-Product-Master.xlsx',
        "May 2, 2022",
        "https://www.wardmfg.com/historical-pricing/?title=Seamless+Pipe+Nipples"
    ],
    [
        "Welded Steel Pipe Nipples 601021_rev1",
        "https://www.wardmfg.com/wp-content/uploads/Wisc_Nipple_priceincrease_601021.pdf",
        "https://www.wardmfg.com/wp-content/uploads/610522-Interactive-.xlsx",
        'https://www.wardmfg.com/wp-content/uploads/601021-Product-Master.xls',
        "October 11, 2021",
        "https://www.wardmfg.com/historical-pricing/?title=Pipe+Nipples"
    ],
    [
        "Steel Pipe Couplings 641021_rev1",
        "https://www.wardmfg.com/wp-content/uploads/Couplings-List-Price-Sheet-641021_rev1.pdf",
        "https://www.wardmfg.com/wp-content/uploads/641021-Interactive.xls",
        'https://www.wardmfg.com/wp-content/uploads/641021-Product-Master.xls',
        "October 11, 2021",
        "https://www.wardmfg.com/historical-pricing/?title=Pipe+Couplings"
    ],
    [
        "Brass Pipe Nipples 620715_rev1",
        "https://www.wardmfg.com/wp-content/uploads/Brass-Pipe-Nipples-List-Price-Sheet-620715_rev1.pdf",
        "https://www.wardmfg.com/wp-content/uploads/2015/07/620715-Brass-Sheet-EXCEL-WEBSITE-FINAL.xls",
        'https://www.wardmfg.com/wp-content/uploads/2014/09/620715-Brass-List-August-2015.xls',
        "August 3, 2015",
        "https://www.wardmfg.com/historical-pricing/?title=Brass+Pipe+Nipples"
    ],
    [
        "Stainless Steel Pipe Nipples 630715_rev1",
        "https://www.wardmfg.com/wp-content/uploads/Stainless-Steel-Pipe-Nipples-List-Price-Sheet-630715_rev1.pdf",
        "https://www.wardmfg.com/wp-content/uploads/2015/07/630715-Stainless-Sheet-Excel-WEBSITE-FINAL.xls",
        'https://www.wardmfg.com/wp-content/uploads/2014/09/630715-Stainless-Steel-List-August-2015.xls',
        "August 3, 2015",
        "https://www.wardmfg.com/historical-pricing/?title=Stainless+Steel+Pipe+Nipples"
    ],
    [
        "International Pipe Couplings 110522_rev1",
        "https://www.wardmfg.com/wp-content/uploads/International-Pipe-Couplings-110522_rev1.pdf",
        "https://www.wardmfg.com/wp-content/uploads/110522-Interactive.xlsx",
        'https://www.wardmfg.com/wp-content/uploads/110522-Product-Master.xlsx',
        "May 31, 2022",
        "https://www.wardmfg.com/historical-pricing/?title=International+Pipe+Couplings&class="
    ],
    [
        "International Welded Steel Pipe Nipples 150522_rev1",
        "https://www.wardmfg.com/wp-content/uploads/Ward_International_Nipple_150522_rev1.pdf",
        "https://www.wardmfg.com/wp-content/uploads/150522-Interactive.xlsx",
        'https://www.wardmfg.com/wp-content/uploads/150522-Product-Master.xlsx',
        "May 31, 2022",
        "https://www.wardmfg.com/historical-pricing/?title=International+Pipe+Nipples&class="
    ],

]

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
    name: "Documents",
    width: "35%",
}, {
    id: "priceSheet",
    name: "Price Sheet",
    width: "11%",
    formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><img src="https://custom.webact.com/wardMFGicons/pdf.png" alt="" style="width: auto; height: 35px"></a>`)
}, {
    id: "interactive",
    name: "Interactive",
    width: "11%",
    formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><img src="https://custom.webact.com/wardMFGicons/sheets.png" alt="" style="width: auto; height: 35px"></a>`)
},
{
    id: "productMaster",
    name: "Product Master",
    width: "11%",
    formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><img src="https://custom.webact.com/wardMFGicons/sheets.png" alt="" style="width: auto; height: 35px"></a>`)
}, {
    id: "effectiveDate",
    name: "Effective Date",
    width: "10%"
}, {
    id: "historicalSheet",
    name: "Historical Sheet",
    width: "11%",
    formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}" style="display: flex; align-items: center; justify-content: center; text-decoration: none; color: #000000;">View History<img src="https://custom.webact.com/wardMFGicons/next.png" alt="" style="width: auto; height: 15px; margin-left: 5px; transform: rotate(315deg);"></a>`)
},
]

let dataTableGrid

function addTablePrice(dataTable) {

    let currentSortSettingData

    if (tableSortDom.selectedIndex === 0) {
        currentSortSettingData = dataTable.sort(
            (objA, objB) => Number(new Date(objA[4])) - Number(new Date(objB[4])) 
        );
    } else {
        currentSortSettingData = dataTable.sort((a, b) => a[0].localeCompare(b[0]))
    }

    dataTableGrid = new gridjs.Grid({
        columns: priceSheetColumns,
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
    }).render(tableWrapper);
    

    setTimeout(() => {
        const tableLinks = document.querySelectorAll(".tableLinks")

        for (let i = 0; i < tableLinks.length; i++) {

            if (tableLinks[i].getAttribute('href') === "") {
                tableLinks[i].innerHTML = ""
            }
        }
    }, 50)

}

function changeTablePrice(dataTable) {
    let currentSortSettingData

    if (tableSortDom.selectedIndex === 0) {
        currentSortSettingData = dataTable.sort(
            (objA, objB) => Number(new Date(objB[4])) - Number(new Date(objA[4]))
        );
    } else {
        currentSortSettingData = dataTable.sort((a, b) => a[0].localeCompare(b[0]))
    }


    dataTableGrid.updateConfig({
        data: currentSortSettingData
    }).forceRender()


    setTimeout(() => {
        const tableLinks = document.querySelectorAll(".tableLinks")

        for (let i = 0; i < tableLinks.length; i++) {

            if (tableLinks[i].getAttribute('href') === "") {
                tableLinks[i].innerHTML = ""
            }
        }
    }, 50)
}


function addTableName() {

    for (let i = 0; i < priceSheetData.length; i++) {
        tableNameDom.innerHTML += `<option value="${[i]}">${priceSheetData[i].tableName}</option>`
    }

    let selectedTable = tableNameDom.selectedIndex
    let selectedTableData = priceSheetData[selectedTable].data

    addTablePrice(selectedTableData)
}

addTableName()

tableNameDom.addEventListener("change", () => {
    let selectedTable = tableNameDom.selectedIndex
    let selectedTableData = priceSheetData[selectedTable].data

    tableWrapper.innerHTML = ""
    changeTablePrice(selectedTableData)
});


tableSortDom.addEventListener("change", () => {
    let selectedTable = tableNameDom.selectedIndex
    let selectedTableData = priceSheetData[selectedTable].data

    tableWrapper.innerHTML = ""
    changeTablePrice(selectedTableData)
});

// Literature and Downloads

let wardflexLnD =
    [
        [
            "WARDFlex ISO 9001:2015 Certificate",
            "https://www.wardmfg.com/wp-content/uploads/WARDFLEX_ISO.pdf",
            "September 11, 2021",
        ],
        [
            "WARDFlex Design & Installation Guide – English (Rev. 15)",
            "https://www.wardmfg.com/wp-content/uploads/DesignInstallationGuide_Rev15_02-24-21.pdf",
            "December 10, 2020",
        ],
        [
            "WARDFlex Design & Installation Guide – French-Canadian (Rev. 15)",
            "https://www.wardmfg.com/wp-content/uploads/Canadian-French_DesignInstallationGuide_Rev15_02-24-21.pdf",
            "December 10, 2020",
        ],
        [
            "WARDFlex Design & Installation Guide – Spanish (Rev. 15)",
            "https://www.wardmfg.com/wp-content/uploads/SPANISH_DesignInstallationGuide_Rev15_02-24-21.pdf",
            "December 10, 2020",
        ],
        [
            "WARDFlex Summation Sizing Charts",
            "https://www.wardmfg.com/wp-content/uploads/Summation-Sizing-Charts.pdf",
            "September 10, 2019",
        ],
        [
            "WARDFlex 26 Foot Rolls",
            "https://www.wardmfg.com/wp-content/uploads/26_1000footrollsblackandyellow.pdf",
            "July 3, 2019",
        ],
        [
            "WARDFlexMAX Brochure Insert",
            "https://www.wardmfg.com/wp-content/uploads/2014/08/WFMAXBrochure-Insert.pdf",
            "October 21, 2016",
        ],
        [
            "Why WARDFlex?",
            "https://www.wardmfg.com/wp-content/uploads/2014/08/WardFlex1sheet_FINAL.pdf",
            "October 21, 2016",
        ],
        [
            "WARDFlex Brochure – English",
            "https://www.wardmfg.com/wp-content/uploads/2018/01/Wardflex_4page_2016vFINAL-1.pdf",
            "July 15, 2016",
        ],
        [
            "CSST Resolution",
            "https://www.wardmfg.com/wp-content/uploads/2014/11/CSST_Senate_Res_483.pdf",
            "November 8, 2014",
        ],
        [
            "Hi-Res WARDFlex Photo",
            "https://www.wardmfg.com/wp-content/uploads/2014/11/12_WARDFLEXphoto1.jpg",
            "November 8, 2014",
        ],
        [
            "WARDFlex Bonding and Grounding FAQs",
            "https://www.wardmfg.com/wp-content/uploads/2014/08/29_wardflex_bonding_grounding_faq.pdf",
            "September 30, 2014",
        ],
        [
            "Safety Pamphlet",
            "https://www.wardmfg.com/wp-content/uploads/2014/08/02_Safety_Pamphlet-Updated_December_2012.pdf",
            "December 5, 2012",
        ],
        [
            "CSST Safety Campaign",
            "https://www.wardmfg.com/wp-content/uploads/2014/11/NASFM_CSST_Senate_Passed_Resolution_Press_Release_7-18-12.pdf",
            "July 18, 2012",
        ],
    ]

let pipeFittingsLnD =
    [
        [
            "International Pipe Fittings Indent Form",
            "https://www.wardmfg.com/wp-content/uploads/100522-INDENT-FORM.xlsx",
            "May 3, 2022May 3, 2022"
        ],
        [
            "Ward Manufacturing Product Catalog – U.S.",
            "https://www.wardmfg.com/wp-content/uploads/Ward-Domestic-Product-Catalog-US-2021_1stEdition_FINAL-1.pdf",
            "January 18, 2022"
        ]
    ]

let pipeNipplesLnD =
    [
        [
            "International Pipe Nipple Indent Form",
            "https://www.wardmfg.com/wp-content/uploads/150522-NIPPLE-INDENT-FORM.xlsx",
            "May 3, 2022"
        ]
    ]

let lNDColumnsData =
    [
        {
            tableName: "WARDFlex/WARDFlexMAX",
            data: wardflexLnD
        },
        {
            tableName: "Pipe Fittings",
            data: pipeFittingsLnD
        },
        {
            tableName: "Pipe Nipples",
            data: pipeNipplesLnD
        }
    ]

let lnDColumns = [
    {
        id: "documentName",
        name: "Document Name",
        width: "60%",
    }, {
        id: "file",
        name: "File",
        width: "20%",
        formatter: (cell) => gridjs.html(`<a class="lnDLinks" href="${cell}"><img src="https://custom.webact.com/wardMFGicons/pdf.png" alt="" style="width: auto; height: 35px"></a>`)
    }, {
        id: "effectiveDate",
        name: "Effective Date",
        width: "20%",
    }
]

let dataTableGridLnD


function addTableLnd(dataTableLnD) {

    let currentSortSettingData 

    if (lndSortDom.selectedIndex === 0) {
        currentSortSettingData = dataTableLnD.sort(
            (objA, objB) => Number(new Date(objB[2])) - Number(new Date(objA[2]))
        );
    } else {
        currentSortSettingData = dataTableLnD.sort((a, b) => a[0].localeCompare(b[0]))
    }

    dataTableGridLnD = new gridjs.Grid({
        columns: lnDColumns,
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
    }).render(lndWrapper);

    setTimeout(() => {
        const tableLinks = document.querySelectorAll(".lnDLinks")

        for (let i = 0; i < tableLinks.length; i++) {

            if (tableLinks[i].getAttribute('href') === "") {
                tableLinks[i].innerHTML = ""
            }
        }
    }, 50)


    setTimeout(() => {
        const tableLinks = document.querySelectorAll(".lnDLinks")

        for (let i = 0; i < tableLinks.length; i++) {

            let urlData = tableLinks[i].getAttribute('href')

            if (tableLinks[i].getAttribute('href').slice(-5) === ".xlsx") {
                tableLinks[i].innerHTML = `<a class="lnDLinks" href="${urlData}"><img src="https://custom.webact.com/wardMFGicons/sheets.png" alt="" style="width: auto; height: 35px"></a>`
            }

        }

        lndContainer.addEventListener('click', () => {
            for (let i = 0; i < tableLinks.length; i++) {

                let urlData = tableLinks[i].getAttribute('href')
    
                if (tableLinks[i].getAttribute('href').slice(-5) === ".xlsx") {
                    tableLinks[i].innerHTML = `<a class="lnDLinks" href="${urlData}"><img src="https://custom.webact.com/wardMFGicons/sheets.png" alt="" style="width: auto; height: 35px"></a>`
                }
    
            }
        })
        
    }, 500)


    
}

function changeTableLnd(dataTableLnD) {
    let currentSortSettingData 

    if (lndSortDom.selectedIndex === 0) {
        currentSortSettingData = dataTableLnD.sort(
            (objA, objB) => Number(new Date(objB[2])) - Number(new Date(objA[2]))
        );
    } else {
        currentSortSettingData = dataTableLnD.sort((a, b) => a[0].localeCompare(b[0]))
    }

    dataTableGridLnD.updateConfig({
        data: currentSortSettingData
    }).forceRender()

    setTimeout(() => {
        const tableLinks = document.querySelectorAll(".lnDLinks")

        for (let i = 0; i < tableLinks.length; i++) {

            if (tableLinks[i].getAttribute('href') === "") {
                tableLinks[i].innerHTML = ""
            }
        }
    }, 50)

    setTimeout(() => {
        const tableLinks = document.querySelectorAll(".lnDLinks")

        for (let i = 0; i < tableLinks.length; i++) {

            let urlData = tableLinks[i].getAttribute('href')

            if (tableLinks[i].getAttribute('href').slice(-5) === ".xlsx") {
                tableLinks[i].innerHTML = `<a class="lnDLinks" href="${urlData}"><img src="https://custom.webact.com/wardMFGicons/sheets.png" alt="" style="width: auto; height: 35px"></a>`
            }

        }

        lndContainer.addEventListener('click', () => {
            for (let i = 0; i < tableLinks.length; i++) {

                let urlData = tableLinks[i].getAttribute('href')
    
                if (tableLinks[i].getAttribute('href').slice(-5) === ".xlsx") {
                    tableLinks[i].innerHTML = `<a class="lnDLinks" href="${urlData}"><img src="https://custom.webact.com/wardMFGicons/sheets.png" alt="" style="width: auto; height: 35px"></a>`
                }
    
            }
        })
        
    }, 500)


}

function addTableLndName() {
    for (let i = 0; i < lNDColumnsData.length; i++) {
        lndNameDom.innerHTML += `<option value="${[i]}">${lNDColumnsData[i].tableName}</option>`
    }

    let selectedTable = lndNameDom.selectedIndex
    let selectedTableData = lNDColumnsData[selectedTable].data

    addTableLnd(selectedTableData)
}

addTableLndName()

lndNameDom.addEventListener("change", () => {
    let selectedTable = lndNameDom.selectedIndex
    let selectedTableData = lNDColumnsData[selectedTable].data

    lndWrapper.innerHTML = ""
    changeTableLnd(selectedTableData)
});


lndSortDom.addEventListener("change", () => {
    let selectedTable = lndNameDom.selectedIndex
    let selectedTableData = lNDColumnsData[selectedTable].data


    lndWrapper.innerHTML = ""
    changeTableLnd(selectedTableData)
});


// History Price Sheet
let wardflexHist = [
    [
        "WARDFlex/WARDFlexMAX 310222_rev2",
        "https://www.wardmfg.com/wp-content/uploads/WardFlex_PriceSheet-310222_rev2.pdf",
        "", 'https://www.wardmfg.com/wp-content/uploads/310222-Product-Master.xls',
        "February 14, 2022"
    ]
]

let pipeFittingsHist = [
    [
        "Malleable Iron & Cast Iron Pipe Fittings 300522_rev3",
        "https://www.wardmfg.com/wp-content/uploads/Ward_DomesticFittings_Price-Sheet_300522_CASTIRON-MALLEABLE_rev3.pdf",
        "https://www.wardmfg.com/wp-content/uploads/300522-Rev.-2-Interactive.xlsx",
        'https://www.wardmfg.com/wp-content/uploads/300522-Rev.-2-Product-Master.xlsx',
        "May 2, 2022"
    ],
    [
        "International Malleable Iron Pipe Fittings & Unions 100522_rev1",
        "https://www.wardmfg.com/wp-content/uploads/Intl-Pipe-Fittings-Unions-PriceSheet_100522_rev1.pdf",
        "https://www.wardmfg.com/wp-content/uploads/100522-Interactive.xlsx",
        'https://www.wardmfg.com/wp-content/uploads/100522-Product-Master.xlsx',
        "May 31, 2022"
    ],
]

let pipeNipplesHist = [
    [
        "Seamless Steel Pipe Nipples 610522_rev1",
        "https://www.wardmfg.com/wp-content/uploads/Seamless-Pipe-Nipples-List-Price-Sheet-610522_rev1.pdf",
        "https://www.wardmfg.com/wp-content/uploads/610522-Interactive-.xlsx",
        'https://www.wardmfg.com/wp-content/uploads/610522-Product-Master.xlsx',
        "May 2, 2022"
    ],
    [
        "Welded Steel Pipe Nipples 601021_rev1",
        "https://www.wardmfg.com/wp-content/uploads/Wisc_Nipple_priceincrease_601021.pdf",
        "https://www.wardmfg.com/wp-content/uploads/610522-Interactive-.xlsx",
        'https://www.wardmfg.com/wp-content/uploads/601021-Product-Master.xls',
        "October 11, 2021"
    ],
    [
        "Steel Pipe Couplings 641021_rev1",
        "https://www.wardmfg.com/wp-content/uploads/Couplings-List-Price-Sheet-641021_rev1.pdf",
        "https://www.wardmfg.com/wp-content/uploads/641021-Interactive.xls",
        'https://www.wardmfg.com/wp-content/uploads/641021-Product-Master.xls',
        "October 11, 2021"
    ],
    [
        "Brass Pipe Nipples 620715_rev1",
        "https://www.wardmfg.com/wp-content/uploads/Brass-Pipe-Nipples-List-Price-Sheet-620715_rev1.pdf",
        "https://www.wardmfg.com/wp-content/uploads/2015/07/620715-Brass-Sheet-EXCEL-WEBSITE-FINAL.xls",
        'https://www.wardmfg.com/wp-content/uploads/2014/09/620715-Brass-List-August-2015.xls',
        "August 3, 2015"
    ],
    [
        "Stainless Steel Pipe Nipples 630715_rev1",
        "https://www.wardmfg.com/wp-content/uploads/Stainless-Steel-Pipe-Nipples-List-Price-Sheet-630715_rev1.pdf",
        "https://www.wardmfg.com/wp-content/uploads/2015/07/630715-Stainless-Sheet-Excel-WEBSITE-FINAL.xls",
        'https://www.wardmfg.com/wp-content/uploads/2014/09/630715-Stainless-Steel-List-August-2015.xls',
        "August 3, 2015"
    ],
    [
        "International Pipe Couplings 110522_rev1",
        "https://www.wardmfg.com/wp-content/uploads/International-Pipe-Couplings-110522_rev1.pdf",
        "https://www.wardmfg.com/wp-content/uploads/110522-Interactive.xlsx",
        'https://www.wardmfg.com/wp-content/uploads/110522-Product-Master.xlsx',
        "May 31, 2022"
    ],
    [
        "International Welded Steel Pipe Nipples 150522_rev1",
        "https://www.wardmfg.com/wp-content/uploads/Ward_International_Nipple_150522_rev1.pdf",
        "https://www.wardmfg.com/wp-content/uploads/150522-Interactive.xlsx",
        'https://www.wardmfg.com/wp-content/uploads/150522-Product-Master.xlsx',
        "May 31, 2022"
    ],

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
    name: "Documents",
    width: "35%",
}, {
    id: "priceSheet",
    name: "Price Sheet",
    width: "11%",
    formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><img src="https://custom.webact.com/wardMFGicons/pdf.png" alt="" style="width: auto; height: 35px"></a>`)
}, {
    id: "interactive",
    name: "Interactive",
    width: "11%",
    formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><img src="https://custom.webact.com/wardMFGicons/sheets.png" alt="" style="width: auto; height: 35px"></a>`)
},
{
    id: "productMaster",
    name: "Product Master",
    width: "11%",
    formatter: (cell) => gridjs.html(`<a class="tableLinks" href="${cell}"><img src="https://custom.webact.com/wardMFGicons/sheets.png" alt="" style="width: auto; height: 35px"></a>`)
}, {
    id: "effectiveDate",
    name: "Effective Date",
    width: "10%"
},
]

let dataTableGridhist

function addTablePriceHist(dataTable) {

    let currentSortSettingData

    if (tableSortDomHist.selectedIndex === 0) {
        currentSortSettingData = dataTable.sort(
            (objA, objB) => Number(new Date(objA[4])) - Number(new Date(objB[4])) 
        );
    } else {
        currentSortSettingData = dataTable.sort((a, b) => a[0].localeCompare(b[0]))
    }


    dataTableGridhist = new gridjs.Grid({
        columns: priceSheetColumnsHist,
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
    }).render(tableWrapperHist);
    

    setTimeout(() => {
        const tableLinks = document.querySelectorAll(".tableLinks")

        for (let i = 0; i < tableLinks.length; i++) {

            if (tableLinks[i].getAttribute('href') === "") {
                tableLinks[i].innerHTML = ""
            }
        }
    }, 50)

}

function changeTablePriceHist(dataTable) {
    let currentSortSettingData

    if (tableSortDomHist.selectedIndex === 0) {
        currentSortSettingData = dataTable.sort(
            (objA, objB) => Number(new Date(objB[4])) - Number(new Date(objA[4]))
        );
    } else {
        currentSortSettingData = dataTable.sort((a, b) => a[0].localeCompare(b[0]))
    }

    dataTableGridhist.updateConfig({
        data: currentSortSettingData
    }).forceRender()


    setTimeout(() => {
        const tableLinks = document.querySelectorAll(".tableLinks")

        for (let i = 0; i < tableLinks.length; i++) {

            if (tableLinks[i].getAttribute('href') === "") {
                tableLinks[i].innerHTML = ""
            }
        }
    }, 50)
}


function addTableNameHist() {

    for (let i = 0; i < priceSheetDataHist.length; i++) {
        tableNameDomHist.innerHTML += `<option value="${[i]}">${priceSheetDataHist[i].tableName}</option>`
    }

    let selectedTable = tableNameDomHist.selectedIndex
    let selectedTableData = priceSheetDataHist[selectedTable].data

    addTablePriceHist(selectedTableData)
}

addTableNameHist()

tableNameDomHist.addEventListener("change", () => {
    let selectedTable = tableNameDomHist.selectedIndex
    let selectedTableData = priceSheetDataHist[selectedTable].data

    tableWrapperHist.innerHTML = ""
    changeTablePriceHist(selectedTableData)
});


tableSortDomHist.addEventListener("change", () => {
    let selectedTable = tableNameDomHist.selectedIndex
    let selectedTableData = priceSheetDataHist[selectedTable].data

    tableWrapperHist.innerHTML = ""
    changeTablePriceHist(selectedTableData)
});