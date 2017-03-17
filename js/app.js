(function() {
    var logger = new LoggerLib();
    logger.log('Hi LS');
    logger.logConsole('Hi Console.', 'info');
    logger.logAlert('Hi Alert.', 'error');
    logger.logWindow('p', 'info', 'i am tag p');
    logger.logWindow('.p', 'error', 'i am tag with class p');
    logger.logWindow('#p', 'warning', 'i am tag with id p');
    // logger.logWindow(' p', 'info', 'i am tag p with space');

    //extend library with custom method
    LoggerLib.prototype.logAlertWithDate = LoggerLib.prototype.logAlertWithDate || function(msg) {
        var date = new Date();
        var dateStr = date.toUTCString();
        var alertLogStr = dateStr + ": " + msg;
        alert(alertLogStr);
    };

    logger.logAlertWithDate('i am custom function');
    var sendDataBtn = document.getElementById('button');
    sendDataBtn.onclick = function() {
        logger.logAPI('logInfo.json', 'error send on server', 'error');
    };

    window.onerror = function(message, sourse, line) {
        logger.logAPI('logInfo.json', message, sourse);
    }
})();