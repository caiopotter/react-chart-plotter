import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('http://localhost:3000/')

WebUI.setText(findTestObject('Object Repository/Page_React App/jsontextarea'), '''{"type": "start", "timestamp": 1599679500000, "select": ["min_response_time", "max_response_time"], "group": ["os", "browser"]}
{"type": "span", "timestamp": 1599679500000, "begin": 1519780251000, "end": 1519780260201}
{"type":"stop"}
{"type": "start", "timestamp": 1599679500000, "select": ["min_response_time", "max_response_time"], "group": ["os", "browser"]}
{"type": "span", "timestamp": 1599679500000, "begin": 1599679500000, "end": 1599679900000}''')
WebUI.click(findTestObject('Object Repository/Page_React App/chartbutton'))

if (WebUI.verifyElementPresent(findTestObject('Object Repository/Page_React App/chart'), 1, FailureHandling.OPTIONAL)) {
    assert false
} else {
    assert true
}

WebUI.closeBrowser()
