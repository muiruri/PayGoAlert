package com.paygo.alerts.dao;

import com.paygo.alerts.model.Alert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

/**
 * Created by kenny on 14/03/2017.
 */
@Repository
public class AlertDaoImpl implements AlertDao {

    @Autowired
    private QueryDao queryDao;

    @Override
    public Integer saveAlert(Alert alert) {
        String sql = "INSERT INTO alerts(device_id, timestamp, type) VALUES (?, ?, ?)";

        PreparedStatementCreator creator = new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
                PreparedStatement preparedStatement = connection.prepareStatement(sql, new String[] {"id"});
                preparedStatement.setString(1, alert.getDeviceId());
                preparedStatement.setTimestamp(2, alert.getTimeStamp());
                preparedStatement.setString(3, alert.getType());
                return preparedStatement;
            }
        };
        return queryDao.insert(sql, creator);
    }

    @Override
    public List fetchAlerts() {
        String query = "SELECT * FROM alerts ";
        List<Alert> alertList = queryDao.queryForList(query, new AlertMapper());
        return alertList;
    }

    /**
     *  Mapper for {@link Alert}
     */
    private static final class AlertMapper implements RowMapper<Alert> {

        public Alert mapRow(ResultSet resultSet, int rowNum) throws SQLException {
            Alert alert = new Alert();
            alert.setId(resultSet.getInt("id"));
            alert.setTimeStamp(resultSet.getTimestamp("timestamp"));
            alert.setDeviceId(resultSet.getString("device_id"));
            alert.setType(resultSet.getString("type"));
            return alert;
        }
    }
}
