<%@page contentType="text/html; charset=UTF-8" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Alerts</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href='resources/vendor/bootstrap/dist/css/bootstrap.min.css' rel='stylesheet' type='text/css' />
        <link href='resources/vendor/bootstrap-table/dist/bootstrap-table.min.css' rel='stylesheet' type='text/css' />
    </head>
    <body>
        <div class="container" id="alerts-view">
            <h4>Received alerts</h4>
            <table class="table">
                <thead>
                <tr>
                    <th data-field="count">#</th>
                    <th data-field="deviceId"><spring:message code="general.deviceId" /></th>
                    <th data-field="timeStamp" data-formatter="app.formatDate"><spring:message code="general.dateSent" /></th>
                    <th data-field="type"><spring:message code="general.type" /></th>
                </tr>
                </thead>
            </table>
        </div>
    </body>
    <script type="text/javascript" src="resources/vendor/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="resources/vendor/bootstrap/dist/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="resources/vendor/underscore/underscore-min.js"></script>
    <script type="text/javascript" src="resources/vendor/backbone/backbone-min.js"></script>
    <script type="text/javascript" src="resources/vendor/notifyjs/dist/notify.js"></script>
    <script type="text/javascript" src="resources/vendor/bootstrap-table/dist/bootstrap-table.min.js"></script>
    <script type="text/javascript" src="resources/js/paygo.js"></script>
    <script type="text/javascript" src="resources/js/app.js"></script>
</html>