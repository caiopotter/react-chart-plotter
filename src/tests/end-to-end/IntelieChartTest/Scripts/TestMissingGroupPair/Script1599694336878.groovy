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
{"type": "data", "timestamp": 1599679500000, "os": "linux", "browser": "chrome", "min_response_time": 0.1, "max_response_time": 1.3}
  {"type": "data", "timestamp": 1599679500000, "os": "linux", "browser": "firefox", "min_response_time": 0.1, "max_response_time": 1.1}
  {"type": "data", "timestamp": 1599679920000, "os": "linux", "browser": "firefox", "min_response_time": 0.2, "max_response_time": 1.7}
  {"type": "data", "timestamp": 1599679500000, "os": "mac", "browser": "firefox", "min_response_time": 0.4, "max_response_time": 1.3}
  {"type": "data", "timestamp": 1599679920000, "os": "mac", "browser": "firefox", "min_response_time": 0.5, "max_response_time": 1.9}
  {"type": "data", "timestamp": 1599679500000, "os": "mac", "browser": "chrome", "min_response_time": 0.6, "max_response_time": 1.8}
  {"type": "data", "timestamp": 1599679920000, "os": "mac", "browser": "chrome", "min_response_time": 0.9, "max_response_time": 2.1}
{"type": "span", "timestamp": 1599679500000, "begin": 1599679500000, "end": 1599679900000}''')
WebUI.click(findTestObject('Object Repository/Page_React App/chartbutton'))

WebUI.verifyElementPresent(findTestObject('Object Repository/Page_React App/chart'), 0) 

WebUI.closeBrowser()
