package com.hiyichang.infohub.common.pageable;

import java.util.List;

public class PageResult<T> {
    private List<T> data;

    private int size;

    private int index;

    private int total;

    public PageResult(List<T> data, Pageable pageable, int total) {
        this.data = data;
        this.index = pageable.getIndex();
        this.size = pageable.getSize();
        this.total = total;
    }

    public List<T> getData() {
        return data;
    }

    public int getSize() {
        return size;
    }

    public int getIndex() {
        return index;
    }

    public int getTotal() {
        return total;
    }
}
