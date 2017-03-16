package com.paygo.alerts.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

/**
 * Created by kenny on 14/03/2017.
 */
@Repository
public class QueryDaoImpl implements QueryDao {

    private JdbcTemplate jdbcTemplate;

    @Autowired
    public void setDataSource(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public Integer update(String query) {
        return this.jdbcTemplate.update(query);
    }

    @Override
    public Integer insert(String query, PreparedStatementCreator preparedStatementCreator) {
        KeyHolder keyHolder = new GeneratedKeyHolder();

        int affected = this.jdbcTemplate.update(preparedStatementCreator, keyHolder);
        if(keyHolder.getKey() != null) {
            return keyHolder.getKey().intValue();
        }
        return affected;
    }

    @Override
    public <T> List<T> queryForList(String query, RowMapper mapper) {
        return this.jdbcTemplate.query(query, mapper);
    }
}
